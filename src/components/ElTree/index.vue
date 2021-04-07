<template>
  <div class="v-el-tree">
    <!-- <h2 style="text-align: center;">树状图动态加载节点</h2> -->
    <div class="v-tree-box" v-if="lazyType">
      <el-tree
        ref="tree"
        :props="defaultProps"
        :load="loadNode"
        lazy
        accordion
        :check-strictly="true"
        show-checkbox
        @check-change="checkChange"
        node-key="userId"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>
            <i class="el-icon-user"></i> {{ node.label }}
          </span>              
        </span>
      </el-tree>
    </div>
    <!-- 可屏蔽 load、lazy，设置 :data -->
    <div class="v-tree-box" v-else>
      <el-tree
        ref="tree"
        :props="defaultProps"
        :data="treeData"
        accordion
        :check-strictly="true"
        show-checkbox
        @check-change="checkChange"
        node-key="userId"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>
            <i :class="data.icon"></i> {{ node.label }}
          </span>              
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { sessionData } from '@/filters/storage';

export default {
  name: "treelazy",
	props: {
    lazyType: {
      type: Boolean,
      required: true
    },
  },
  data() {
    const data = [
      {
        id: 1,
        userName: "一级 1",
        icon: "el-icon-folder-opened",
        leaf: false,
        children: [
          {
            id: 4,
            userName: "二级 1-1",
            icon: "el-icon-folder-opened",
            leaf: false,
            children: [
              {
                id: 9,
                userName: "三级 1-1-1",
                leaf: true,
              },
              {
                id: 10,
                userName: "三级 1-1-2",
                leaf: true,
              }
            ]
          }
        ]
      },
      {
        id: 2,
        userName: "一级 2",
        icon: "el-icon-folder-opened",
        leaf: false,
        children: [
          {
            id: 5,
            userName: "二级 2-1",
            leaf: true,
          },
          {
            id: 6,
            userName: "二级 2-2",
            leaf: true,
          }
        ]
      },
      {
        id: 3,
        userName: "一级 3",
        icon: "el-icon-folder-opened",
        leaf: false,
        children: [
          {
            id: 7,
            userName: "二级 3-1",
            leaf: true,
          },
          {
            id: 8,
            userName: "二级 3-2",
            leaf: true,
          }
        ]
      }
    ];
    return {
      treeChildrenData: [],
      treeData: [],
      defaultProps: {
        children: "children",
        label: "userName",
        isLeaf: "leaf",
        // disabled: "hasChild",  //还可以使用disabled控制节点是否能被选择
      },
      selectOrg: {  // 选择框
        orgJsn: {}, //存唯一的值，勾选的
        orgsid: [], //存id，与node-key相结合
      },
    };
  },
  computed:{
    ...mapState("localUser", ["getUserGoOrganizationList", "getUserFindOrganizationList"])
  },
  watch: {
    "getUserGoOrganizationList": {
      handler(newValue, oldValue) {
        // console.log(newValue);
      },
      immediate: true
    },
    "getUserFindOrganizationList": {  // 查下级
      handler(newValue, oldValue) {
        // console.log(newValue);
        if(newValue.length > 0) {
          this.$nextTick(function() {
            this.treeChildrenData = newValue;
          })
        } else {
          this.$message({
            message: "未查到该用户的下级，请稍后再试",
            type: 'info',
            onClose: () => {}
          });
          this.treeChildrenData = [];
        }
      },
      deep: true
    },
  },
  created() {
    // this.treeData = [];
    let {userName, userId} = sessionData('get', 'StateUserInfoSession', '');   // 父级节点（根）
    let item = {
      userName: userName,
      userId: userId,
      icon: "el-icon-user",
      children: []
    }
    this.treeData.push(item);
  },
  methods: {
    ...mapActions("localUser", ["ActionsUserFindOrganizationList"]),
    // 树组件动态加载子树数据事件
    loadNode(node, resolve) {
      // console.log(node);
      if (node.level === 0) {
        // 这里适合去做数据请求，获取到树状图数据
        // node.level === 0 是初始化树状图最开始就展示的数据
        setTimeout(() => {
          let res = this.treeData;
          resolve(res);
        }, 2000);
      } else {
          // 这里适合去做数据请求，获取到树状图数据 （为实现loading效果，添加了定时器）
          this.ActionsUserFindOrganizationList({userId: node.data.userId})
          setTimeout(() => {
            let res = this.treeChildrenData;
            resolve(res);
          }, 3000);
      }
    },
    // 设置复选框为单选的  
    checkChange(data, checked) {
      // console.log(data);
      // 获取当前选择的id在数组中的索引
      const indexs = this.selectOrg.orgsid.indexOf(data.userId);
      // 如果不存在数组中，并且数组中已经有一个id并且checked为true的时候，代表不能再次选择。
      if (indexs < 0 && this.selectOrg.orgsid.length === 1 && checked) {
        // 设置已选择的节点为false 很重要
        this.$nextTick(function() {
          this.$refs.tree.setChecked(this.selectOrg.orgJsn, false); //设置之前选中的为未选中
          this.selectOrg.orgsid = []; //清空
          this.selectOrg.orgsid.push(data.userId); //存唯一的node-key中唯一的标致 id
          this.selectOrg.orgJsn = data; //存当前节点的json
        })

      } else if (this.selectOrg.orgsid.length === 0 && checked) {
        // 发现数组为空 并且是已选择
        // 防止数组有值，首先清空，再push
        this.$nextTick(function() {
          this.selectOrg.orgJsn = data;
          this.selectOrg.orgsid = [];
          this.selectOrg.orgsid.push(data.userId);
        })
        
      } else if (
        indexs >= 0 &&
        this.selectOrg.orgsid.length === 1 &&
        !checked 
      ) {
        // 再次直接进行赋值为空操作
        this.selectOrg.orgsid = [];
      }
    },
  },
  destroyed() {
    this.treeData = [];
    this.treeChildrenData = [];
    // console.log(this.treeData);
  },
};
</script>