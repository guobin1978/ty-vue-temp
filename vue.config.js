/** @format */

const FileManagerPlugin = require("filemanager-webpack-plugin");
const compressing = require("compressing");

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    // 清除已有的所有 loader,如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();
    // 添加要替换的 loader
    svgRule.use("svg-sprite-loader").loader("svg-sprite-loader").options({
      symbolId: "icon-[name]"
    });
  },
  publicPath: "./",
  lintOnSave: false,
  devServer: {
    proxy: {
      "/proxy": {
        target: "http://10.75.16.43:8080",
        changeDrigin: true,
        pathRewrite: {
          "^/proxy": ""
        }
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push({
        apply: compiler => {
          compiler.hooks.done.tap("tar", compilation => {
            compressing.tar
              .compressDir("dist", "dist.tar")
              .then(() => {
                console.log("success");
              })
              .catch(err => {
                console.error(err);
              });
          });
        }
      });
    } else {
      // 为开发环境修改配置...
    }
  }
};
