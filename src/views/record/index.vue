<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="user.id" label="用户ID" width="180" />
    <el-table-column prop="user.username" label="用户姓名" width="180" />
    <el-table-column prop="book.title" label="书名" width="180" />
    <el-table-column prop="book.shelfNumber" label="所在书架" />
    <el-table-column prop="borrowDate" label="借书日期" />
    <el-table-column prop="returnDate" label="归还日期" />
    <el-table-column prop="dueDate" label="实际归还日期" />
  </el-table>
</template>

<script setup>
import { fetchAllRecord } from "../../api/allrecord";
import { ref, onMounted } from "vue";

let tableData = ref([]);
async function fetchData() {
  try {
    const response = await fetchAllRecord();
    console.log(response.data);
    tableData.value = response.data;
    // 格式化日期
    tableData.value.forEach((record) => {
      record.borrowDate = moment(record.borrowDate, "YYYY/MM/DD").format("L");
      record.returnDate = moment(record.returnDate, "YYYY/MM/DD").format("L");
      record.dueDate = moment(record.dueDate, "YYYY/MM/DD").format("L");
    });
  } catch (error) {
    console.error(error);
  }
}
onMounted(fetchData);
</script>
<style lang="scss" scoped></style>
