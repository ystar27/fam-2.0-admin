import axios from "./axios";

/** REFERRAL REQUESTS */
export function getReferrals({ page = 1, limit = 5 }: any) {
  return axios.get("/referrals", { params: { page, limit } });
}

export function getOpportunity() {
  return axios.get("/opportunity");
}

export function getOpportunityCategory() {
  return axios.get("/opportunity/category");
}
