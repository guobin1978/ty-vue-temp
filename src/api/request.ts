/** @format */
import axios from "./axios";
import { RequestFunctionParams } from "yapi-to-typescript";

export interface RequestOptions {
  /**
   * 使用的服务器。
   *
   * - `prod`: 生产服务器
   * - `dev`: 测试服务器
   * - `mock`: 模拟服务器
   *
   * @default prod
   */
  server?: "prod" | "dev" | "mock";
}

export default function request<TResponseData>(
  payload: RequestFunctionParams,
  options: RequestOptions = {
    server: process.env.NODE_ENV === "production" ? "prod" : "dev"
  }
) {
  // 基本地址
  const baseUrl =
    options.server === "mock"
      ? payload.mockUrl
      : options.server === "dev"
      ? payload.devUrl
      : payload.prodUrl;

  // 请求地址
  const url = `${baseUrl}${payload.path}`;
  const method = payload.method.toLocaleLowerCase();
  if (method === "get") {
    return axios[method](url, { params: payload.rawData });
  } else if (method === "post") {
    return axios[method](url, payload.data);
  }
}
