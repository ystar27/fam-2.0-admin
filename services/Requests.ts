import axios from "./axios";

/** REFERRAL REQUESTS */
export function getReferrals({ page = 1, limit = 5 }: any) {
  return axios.get("/referrals", { params: { page, limit } });
}
