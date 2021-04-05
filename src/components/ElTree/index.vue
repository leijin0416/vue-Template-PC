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
        node-key="id"
      ></el-tree>
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
        node-key="id"
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
        name: "一级 1",
        icon: "el-icon-folder-opened",
        children: [
          {
            id: 4,
            name: "二级 1-1",
            icon: "el-icon-folder-opened",
            children: [
              {
                id: 9,
                name: "三级 1-1-1"
              },
              {
                id: 10,
                name: "三级 1-1-2"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "一级 2",
        icon: "el-icon-folder-opened",
        children: [
          {
            id: 5,
            name: "二级 2-1"
          },
          {
            id: 6,
            name: "二级 2-2"
          }
        ]
      },
      {
        id: 3,
        name: "一级 3",
        icon: "el-icon-folder-opened",
        children: [
          {
            id: 7,
            name: "二级 3-1"
          },
          {
            id: 8,
            name: "二级 3-2"
          }
        ]
      }
    ];
    return {
      treeData: JSON.parse(JSON.stringify(data)),
      defaultProps: {
        children: "children",
        label: "name",
        isLeaf: "leaf",
        // disabled: "hasChild",  //还可以使用disabled控制节点是否能被选择
      },
      selectOrg: {  // 选择框
        orgJsn: {}, //存唯一的值，勾选的
        orgsid: [], //存id，与node-key相结合
      },
    };
  },
  methods: {
    ...mapActions("localUser", ["ActionsUserFindOrganizationList"]),
    // 树组件动态加载子树数据事件
    loadNode(node, resolve) {
      if (node.level === 0) {
        // 这里适合去做数据请求，获取到树状图数据
        // node.level === 0 是初始化树状图最开始就展示的数据
        let res = this.treeData
        resolve(res);
      } else {
        // 这里适合去做数据请求，获取到树状图数据 （为实现loading效果，添加了定时器）
        setTimeout(() => {
          // 每次请求的数据应该根据node.data.id 去请求（看项目后端需要什么参数，我的是点击节点的id，去获取这个节点下面的子节点数据）
          let res2 = [
            {
              id: 10,
              name: "上海分公司",
              leaf: true,
            },
            {
              id: 12,
              name: "成都分公司",
              leaf: true,
            },
            {
              id: 11,
              name: "武汉分公司",
              // leaf 这个参数可以根据请求接口，返回的数据信息，去判断这个节点是否还包含子节点，从而控制是否有右箭头
              leaf: true,
            },
          ];
          resolve(res2);
        }, 500);
      }
    },
    // 设置复选框为单选的  
    checkChange(data, checked) {
      // 获取当前选择的id在数组中的索引
      const indexs = this.selectOrg.orgsid.indexOf(data.id);
      // 如果不存在数组中，并且数组中已经有一个id并且checked为true的时候，代表不能再次选择。
      if (indexs < 0 && this.selectOrg.orgsid.length === 1 && checked) {
        // 设置已选择的节点为false 很重要
        this.$nextTick(function() {
          this.$refs.tree.setChecked(this.selectOrg.orgJsn, false); //设置之前选中的为未选中
          this.selectOrg.orgsid = []; //清空
          this.selectOrg.orgsid.push(data.id); //存唯一的node-key中唯一的标致 id
          this.selectOrg.orgJsn = data; //存当前节点的json
        })

      } else if (this.selectOrg.orgsid.length === 0 && checked) {
        // 发现数组为空 并且是已选择
        // 防止数组有值，首先清空，再push
        this.$nextTick(function() {
          this.selectOrg.orgJsn = data;
          this.selectOrg.orgsid = [];
          this.selectOrg.orgsid.push(data.id);
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
};
</script>