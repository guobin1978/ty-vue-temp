/** @format */

// 懒加载路由
const page404 = () => import("./index.vue");
export default {
  path: "/404",
  name: "404",
  component: page404,
  children: []
};
