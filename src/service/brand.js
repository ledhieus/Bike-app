import { get } from "../../utils/request"


export const getBrands = async (path) => {
  const result = await get(`/brand${path}`)
  return result
}