import { get } from "../../utils/request"


export const getBrands = async (path) => {
  const result = await get(`api/client/brand${path}`)
  return result
}