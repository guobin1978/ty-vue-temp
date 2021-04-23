/** @format */

// 懒加载路由
const Layout = () => import("./index.vue");
export default {
  path: "/",
  name: "index",
  component: Layout,
  children: []
};
