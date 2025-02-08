import { get } from "../../utils/request"


export const getProduct = async (path) => {
  const result = await get(`/products${path}`)
  return result
}