/** @format */
// yapi配置文件
import { defineConfig } from "yapi-to-typescript";

export default defineConfig([
  {
    serverUrl: "http://127.0.0.1:3000/", // 服务器地址
    typesOnly: false, // 是否只生成接口请求内容和返回内容的 TypeSript 类型，是则请求文件和请求函数都不会生成
    target: "typescript", // 要生成的目标代码类型
    // 支持生成 React Hooks 代码的相关配置
    reactHooks: {
      enabled: false // 是否开启该项功能
    },
    prodEnvName: "prod", // 生产环境名称。用于获取生产环境域名
    devEnvName: "dev", // 开发环境名称。用于获取开发环境域名
    outputFilePath: "src/api/index.ts", // 输出文件路径。可以是 相对路径 或 绝对路径。如 'src/api/index.ts'
    requestFunctionFilePath: "src/api/request.ts", // 请求函数文件路径。如 'src/api/request.ts'
    dataKey: "data", //比如接口返回的数据
    // 项目列表配置
    projects: [
      {
        token:
          "f306f47ff3efa0011bbb6573fcef05b3ab9bed6f7d88a2ef544d4a6b908a0183", // 项目的唯一标识
        // 分类列表配置
        categories: [
          {
            id: 0, // 分类 ID
            // 获取请求函数的名称
            getRequestFunctionName(interfaceInfo, changeCase) {
              return changeCase.camelCase(interfaceInfo.parsedPath.name);
            }
          }
        ]
      }
    ]
  }
]);
