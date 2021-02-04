import { http } from "@/plugins/axios";
import { stringify } from "qs";

export function queryList(params) {
  return http.post("/api/front/content/list", params);
}

export function queryDetail(params) {
  return http.get(`/api/front/content/get?${stringify(params)}`);
}

export function getWeater(params) {
  // return http.get(`/api/front/content/get?${stringify(params)}`)
  return http.get(
    `https://restapi.amap.com/v3/weather/weatherInfo?key=348ba6dfb4be62367ac5a7aadc066e86&city=${params}`
  );
}
