import { API } from "./api.mjs"

export const getUrl = (method, params) => {
  return `${API}/${method}/${params}`;
}