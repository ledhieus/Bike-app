import { get } from "../../utils/request"


export const getCategory = async (path) => {
  const result = await get(`api/client/category${path}`)
  return result
}