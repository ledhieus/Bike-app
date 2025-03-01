
import { get, post } from "../../utils/request"

export const postRegister = async (options) => {
  const result = await post(`api/client/user/register`, options)
  return result
}

export const postVerifyOtp = async (options) => {
  const result = await post(`api/client/user/xac-nhan-otp`, options)
  return result
}

export const postLogin = async (options) => {
  const result = await post(`api/client/user/login`, options)
  return result
}

export const getDetailUser = async () => {
  const result = await get(`api/client/user/detail`, true)
  return result
}