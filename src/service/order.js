import { post } from "../../utils/request"

export const postCreatOrder = async (options) => {
  const result = await post(`api/client/order/create`, options, true)
  return result
}