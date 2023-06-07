<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="book.title" label="书名" width="180" />
    <el-table-column prop="book.shelfNumber" label="所在书架" />
    <el-table-column prop="borrowDate" label="借书日期" />
    <el-table-column prop="returnDate" label="归还日期" />
    <el-table-column prop="dueDate" label="实际归还日期" />
    <el-table-column label="">
      <template #default="scope">
        <el-button type="primary" plain @click="returnBookbt(scope.row)">
          点击还书
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { fetchUserRecord } from "../../api/userrecord";
import { returnBook } from "../../api/returnbook";
import { ref, onMounted } from "vue";

let tableData = ref([]);
async function fetchData() {
  try {
    const response = await fetchUserRecord();
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

async function returnBookbt(record) {
  //判断是否已经归还
  if (
    record.dueDate !== null &&
    record.dueDate !== "" &&
    record.dueDate !== undefined
  ) {
    alert("该书已经归还");
    return;
  }
  try {
    // 更新本地数据
    await returnBook(record.id);
    await fetchData();
  } catch (error) {
    console.error(error);
  }
}

onMounted(fetchData);
</script>

<style lang="scss" scoped></style>
