/** @format */

const FileManagerPlugin = require("filemanager-webpack-plugin");

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
  configureWebpack: {
    //webpack的相关配置在这里
    plugins: [
      new FileManagerPlugin({
        //初始化 filemanager-webpack-plugin 插件实例
        events: {
          onEnd: {
            delete: [
              //首先需要删除项目根目录下的dist压缩包
              "./dist.tar"
            ],
            archive: [
              //然后我们选择dist文件夹将之打包成dist.tar并放在根目录
              {
                source: "./dist",
                destination: "./dist/dist.tar",
                options: {
                  gzip: true
                }
              }
            ]
          }
        }
      })
    ]
  }
};
