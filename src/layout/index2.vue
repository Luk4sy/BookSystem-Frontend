<template>
    <div class="common-layout">
      <el-container class="app-wrapper">
        //TODO:修改样式
        <el-aside width="asideWidth" class="sidebar-container">
          <Menu />
        </el-aside>
        <el-container class="container">
          <el-header><Headers /></el-header>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import Menu from "./Menu/index2.vue";
  import Headers from "./headers/index.vue";
  </script>
  
  <style lang="scss" scoped>
  .app-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .container {
    width: calc(100% - $sideBarWidth);
    height: 100%;
  
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    transition: all 0.28s;
    &.hidderContainer {
      width: calc(100% - $hideSideBarWidth);
    }
  }
  ::v-deep .el-header {
    padding: 0;
  }
  </style>
  