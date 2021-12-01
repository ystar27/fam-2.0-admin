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

export function getShowcase(data: any) {
	return axios.get("/showcase", { params: { ...data } });
}

export function deleteShowcase(showcaseId: string) {
	return axios.delete(`/showcase/${showcaseId}`);
}
