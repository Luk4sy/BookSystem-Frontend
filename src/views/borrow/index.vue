<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="书名">
      <el-input v-model="form.title" />
    </el-form-item>

    <el-form-item label="书籍ID">
      <el-input v-model="form.bookId" />
    </el-form-item>

    <el-form-item label="ISBN号">
      <el-input v-model="form.isbn" />
    </el-form-item>

    <el-form-item label="所在书架">
      <el-input v-model="form.shelfNumber" />
    </el-form-item>

    <el-form-item label="作者">
      <el-input v-model="form.author" />
    </el-form-item>

    <el-form-item label="归还时间">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive } from "vue";
import { onMounted } from "vue";
import { useRouter} from "vue-router";
import { useStore } from "vuex";
import { borrowBook } from "../../api/borrow";

const router = useRouter();
let form = reactive({});

onMounted(() => {
  form.title = useStore().state.currentBorrowBookData.title;
  form.isbn = useStore().state.currentBorrowBookData.isbn;
  form.shelfNumber = useStore().state.currentBorrowBookData.shelfNumber;
  form.author = useStore().state.currentBorrowBookData.author;
  form.bookId = useStore().state.currentBorrowBookData.id;

  console.log(form);
});

const onSubmit = async () => {
  try {
    const response = await borrowBook(form.bookId, form.date);
    console.log(response.data);
    alert("借书成功，请注意按照规定时间归还!");
    router.push({ path: '/userrecord'})
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
