<template>
  <div class="table-box">
    <el-table
      ref="filterTable"
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange" >
      <template v-for="(column, index) in tableColumnData">
        <!--复选框（START）-->
        <el-table-column
          v-if="column.type == 'selection'"
          type="selection"
          :width="column.width ? column.width : 60"
          :align="column.align ? column.align : 'center'">
        </el-table-column>
        <!--序号（END）-->

        <!-- 操作列/自定义列  slot 添加自定义配置项 -->
        <slot v-else-if="column.slot" :name="column.slot" :tit='index'></slot>

        <!-- 默认渲染列-渲染每一列的汉字 -->
        <el-table-column
          :prop="column.prop"
          :label="column.label"
          :align="column.align"
          :width="column.width"
          :show-overflow-tooltip="true"
          v-else >
        </el-table-column>

      </template>
    </el-table>
    <div class="v-page-box">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="totalCount"
        :page-size="12"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
import { apiWebUserLogin } from "@/api/index";
import { sessionData } from '@/filters/storage';

export default {
	name: "",
	// 组件
	components: {
	},
	// 接收父组件传参
	props: {
    tableData: {
      type: Object,
      required: true
    },
    tableColumnData: {
      type: Object,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    },
  },
	data() {
		return {
		}
	},
  computed:{
    ...mapState({}),
  },
	// 页面初始化
	mounted(){},
	// 监听click方法
	methods: {
    handleSizeChange(val) {
      console.log(val);
    },
    handleSelectionChange(data) {
      this.$emit('handleSelectionChange',data);
    },
    handleCurrentChange(data) {
      this.$emit('handleCurrentChange',data);
    }
	},
}
</script>

<style lang="scss" scoped>
/deep/.el-table th {background: rgba(249, 249, 249, .8);}
.v-page-box {
  padding: 30px 5px 5px;
  text-align: right;
}
</style>
