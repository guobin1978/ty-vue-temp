/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style.scss";
import { componentsInstall } from "@/components/index.ts";
const app = createApp(App);
componentsInstall(app);

app.use(store).use(router).mount("#app");
