/** @format */

import { createRouter, createWebHashHistory } from "vue-router";

// 动态加载pages中所有的路由文件
const files = require.context("@/views", true, /router\.ts$/);
const routes = files.keys().map(key => {
  const page = require("@/views" + key.replace(".", ""));
  return page.default;
});

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
