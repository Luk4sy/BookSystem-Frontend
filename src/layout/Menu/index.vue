<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
      background-color="#304156"
      text-color="#fff"
      router
      unique-opened
      :collapse="store.state.collapseFlag"
      collapse-transition="true"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><User /></el-icon>
          <span>图书管理</span>
        </template>
        <el-menu-item index="/main"
          ><el-icon><MessageBox /></el-icon>图书信息</el-menu-item
        >
        <el-menu-item index="/allrecord"
          ><el-icon><ChatRound /></el-icon>借书信息</el-menu-item
        >
      </el-sub-menu>

      <!-- <el-sub-menu index="2">
        <template #title>
          <el-icon><MessageBox /></el-icon>
          <span>Navigator 2</span>
        </template>
        <el-menu-item index="/goods">
          <el-icon><ChatRound /></el-icon>item 1
        </el-menu-item>
        <el-menu-item index="/goods">
          <el-icon><ChatRound /></el-icon>item 2
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>Navigator 3</span>
        </template>
        <el-menu-item index="/orders">item 1</el-menu-item>
        <el-menu-item index="/orders">item 2</el-menu-item>
      </el-sub-menu> -->
    </el-menu>
  </div>
</template>

<script setup>
// import { menuList } from "../../api/menu";
import { ref } from "vue";
import { useStore } from "vuex";
import { User } from "@element-plus/icons";
import { MessageBox } from "@element-plus/icons";
import { ChatRound } from "@element-plus/icons";
import { Setting } from "@element-plus/icons";

const store = useStore();
// const menusList = ref([]);
// const initMenuList = async () => {
//   menusList.value = await menuList();
// };
// initMenuList();
</script>

<style lang="scss" scoped></style>
