import { get } from "../../utils/request"


export const getProduct = async (path) => {
  const result = await get(`api/client/product${path}`)
  return result
}