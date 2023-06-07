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
            <span>图书馆借书系统</span>
          </template>
          <el-menu-item index="/usermain"
            ><el-icon><MessageBox /></el-icon>用户图书信息</el-menu-item
          >
          <el-menu-item index="/userrecord"
            ><el-icon><ChatRound /></el-icon>借书记录</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useStore } from "vuex";
  import { User } from "@element-plus/icons";
  import { MessageBox } from "@element-plus/icons";
  import { ChatRound } from "@element-plus/icons";
  import { Setting } from "@element-plus/icons";
  
  const store = useStore();
  </script>
  
  <style lang="scss" scoped></style>
  