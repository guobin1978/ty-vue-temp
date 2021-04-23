/** @format */

import SvgIcon from "./SvgIcon/index.vue";
import { setSvg } from "./SvgIcon/index";

export const componentsInstall = (app: any) => {
  app.component("SvgIcon", SvgIcon);
  setSvg();
};
