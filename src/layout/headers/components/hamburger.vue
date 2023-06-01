<template>
  <div class="hamburger-container" @click="toggleClick">
    <el-icon v-if="flag"><CaretLeft /></el-icon>
    <el-icon v-else><CaretRight /></el-icon>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from 'vue';
import { CaretLeft } from "@element-plus/icons";
import { CaretRight } from "@element-plus/icons";

const store = useStore();
const flag = computed(() => store.state.collapseFlag);

const toggleClick = () => {
  store.commit('toggleCollapseFlag');
  console.log(store)
};
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
