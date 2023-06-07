<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="书名">
      <el-input v-model="form.title" />
    </el-form-item>

    <el-form-item label="书籍ID">
      <el-input v-model="form.id" />
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
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
let form = reactive({});

onMounted(() => {
  form.title = useStore().state.currentBorrowBookData.title;
  form.isbn = useStore().state.currentBorrowBookData.isbn;
  form.shelfNumber = useStore().state.currentBorrowBookData.shelfNumber;
  form.author = useStore().state.currentBorrowBookData.author;
  form.id = useStore().state.currentBorrowBookData.id;

  console.log(form);
});
</script>

<style lang="scss" scoped></style>
