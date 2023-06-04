<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          type="primary"
          placeholder="Please input"
          clearable
          v-model="query"
        >
        </el-input>
      </el-col>
      <el-button type="primary" :icon="Search">搜索</el-button>
      <el-button type="primary">添加</el-button>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    <el-table-column  label="update"> <el-button type="primary" plain :icon="Edit">修改</el-button></el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
import { reactive, toRefs, watchEffect, ref } from "vue";

const { query, pagenum, pagesize } = toRefs(
  reactive({
    query: "",
    pagenum: 1,
    pagesize: 2,
  })
);

const tableData = ref([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);

watchEffect(() => {
  console.log(query.value);
});
</script>
<style lang="scss" scoped>
.header{
  padding-bottom: 16px;
  box-sizing: border-box;
}
</style>
