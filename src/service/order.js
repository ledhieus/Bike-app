
import { get, post } from "../../utils/request"

export const postCreatOrder = async (options) => {
  const result = await post(`api/client/order/create`, options, true)
  return result
}

export const getOrder = async (token) => {
  const result = await get(`api/client/order/${token}`, true)
  return result
}