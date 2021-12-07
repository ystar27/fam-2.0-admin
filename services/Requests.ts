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

export function adminLogin(data: any) {
	return axios({ method: "post", url: "/auth/login/admin", data });
}

export function registerAdmin(data: any) {
	return axios({ method: "post", url: "/auth/register/admin", data });
}

export function getAuthAdmin() {
	return axios.get("/auth/user/admin");
}

export function getAdmins() {
	return axios.get("/auth/user/admins");
}

export function removeAdmin(id: string) {
	return axios.delete(`/auth/${id}/admin`);
}
