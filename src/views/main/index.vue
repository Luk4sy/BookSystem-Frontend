<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          type="primary"
          placeholder="Please input"
          clearable
          v-model="query"
        ></el-input>
      </el-col>
      <el-button type="primary" :icon="Search">搜索</el-button>
      <el-button type="primary" @click="addBookRow">添加</el-button>
      <el-button type="primary" @click="saveBook" v-if="isNewBook"
        >保存</el-button
      >
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="isbn" label="ISBN" width="180" />
      <el-table-column prop="title" label="书名" width="180" />
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="shelfNumber" label="所在书架" />
      <el-table-column prop="status" label="状态" />
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-switch
            v-model="row.switchStatus"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :disabled="isNewBook.value && row === newBook"
            @change="() => handleSwitchChange(row)"
          ></el-switch>
        </template>
      </el-table-column>
    </el-table>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="添加新书籍" name="addBook" v-if="isNewBook">
        <el-form>
          <el-form-item label="ISBN">
            <el-input v-model="newBook.isbn" placeholder="ISBN"></el-input>
          </el-form-item>
          <el-form-item label="书名">
            <el-input v-model="newBook.title" placeholder="书名"></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="newBook.author" placeholder="作者"></el-input>
          </el-form-item>
          <el-form-item label="所在书架">
            <el-input
              v-model="newBook.shelfNumber"
              placeholder="所在书架"
            ></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="newBook.status" placeholder="状态">
              <el-option label="可借阅" value="可借阅"></el-option>
              <el-option label="已借出" value="已借出"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
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
import { fetchBooks, updateBookStatus } from "../../api/main";
import { addNewBook } from "../../api/addbook";
import router from "../../router";

const { query, pagenum, pagesize } = toRefs(
  reactive({
    query: "",
    pagenum: 1,
    pagesize: 2,
  })
);

const tableData = ref([]);

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

const newBook = reactive({
  isbn: "",
  title: "",
  author: "",
  shelfNumber: "",
  status: "",
  isNew: true,
});
const activeName = ref("");
const isNewBook = ref(false);

const addBookRow = () => {
  isNewBook.value = true;
  activeName.value = "addBook";
};

const saveBook = async () => {
  // 在这里保存新书籍的信息
  try {
    const response = await addNewBook(newBook);
    console.log(response.data); // 打印返回的数据
    newBook.isNew = false; // 设置新添加的行为非新行
    newBook.id = response.data.id; // 更新ID为服务器返回的ID
    tableData.value.push(newBook);
    isNewBook.value = false;
    // 清空newBook数据，以便于下一次添加
    newBook.isbn = "";
    newBook.title = "";
    newBook.author = "";
    newBook.shelfNumber = "";
    newBook.status = "";
    newBook.isNew = true;

    // 再次从服务器获取数据
    const updatedResponse = await fetchBooks();
    tableData.value = updatedResponse.data.map((book) => ({
      ...book,
      switchStatus: book.status === "可借阅",
    }));
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}
</style>
