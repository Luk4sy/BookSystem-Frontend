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
      <el-table-column prop="isbn" label="ISBN" width="180" />
      <el-table-column prop="title" label="书名" width="180" />
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="shelfNumber" label="所在书架" />
      <el-table-column prop="status" label="状态" />
      <el-table-column label="">
        <template #default="{ row }">
          <el-button type="primary" @click="handleBorrow(row)">点击借书</el-button></template>
      </el-table-column>
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
import { reactive, toRefs, watchEffect, ref, toRaw } from "vue";
import { fetchBooks, updateBookStatus } from "../../api/main";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const { query, pagenum, pagesize } = toRefs(
  reactive({
    query: "",
    pagenum: 1,
    pagesize: 2,
  })
);

const tableData = ref([]);
const router = useRouter(); 
const store = useStore() 

watchEffect(async () => {
  try {
    const response = await fetchBooks();
    console.log(response.data); // 打印返回的数据
    tableData.value = response.data.map((book) => ({
      ...book,
      switchStatus: book.status === "可借阅",
    }));
  } catch (error) {
    console.error(error);
  }
});

const handleSwitchChange = async (book) => {
  book.status = book.switchStatus ? "可借阅" : "已借出";
  try {
    await updateBookStatus(book.id, book.status);
  } catch (error) {
    console.error(error);
  }
};

const handleBorrow = (book) => {
console.log(book)
router.push({name: "borrowBook"})
  // router.push({ name: "borrowBook", params: {
  //   name: "SG"
  // }})
  store.commit("storeCurrentBorrowData", book)
  // if (book.status === "可借阅") {
  //   // TODO:跳转到填写借阅信息的页面
  //   router.push({ name: 'borrowBook', params: { username: 'eduardo' } })
  //   console.log("跳转借阅");
  // } else {
  //   // 弹出提示
  //   alert("该书正处于借阅中！")
  // }
};
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}
</style>
