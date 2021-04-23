/** @format */

import { createStore, StoreOptions } from "vuex";
interface Modules {
  [key: string]: any;
}
const files = require.context("./modules", false, /\.ts$/);
const modules: Modules = {};
files.keys().forEach((key: string) => {
  modules[key.replace(/(\.\/|\.ts)/g, "")] = files(key);
});
const storeOptions: StoreOptions<Modules> = {
  modules
};
export default createStore(storeOptions);
