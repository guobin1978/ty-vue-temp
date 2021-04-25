<!-- @format -->

<template>
  <div class="flex-column layout">
    <div class="header">{{ header }}</div>
    <div class="flex-between-center flex-1 section">
      <div class="nav">{{ nav }}</div>
      <div class="main flex-1">
        <router-view v-slot="{ Component }">
          <transition name="router-fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, ref } from "vue";

export default {
  setup() {
    const header = "header";
    const nav = "nav";

    return {
      header,
      nav
    };
  }
};
</script>

<style lang="scss" scoped>
$header-height: 80px;
$nav-width: 200px;
.layout {
  width: 100%;
  height: 100%;
  .header {
    height: $header-height;
  }
  .section {
    .nav {
      width: $nav-width;
      height: 100%;
    }
    .main {
      height: 100%;
    }
  }
}
</style>
