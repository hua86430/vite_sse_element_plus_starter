import axios from "axios";
import Cookie from "js-cookie";

export const useAxios = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL,
	// withCredentials: true,
	headers: {
		// "Content-Type": "application/json; charset=utf-8",
		// Authorization: "Bearer " + Cookie.get("token")
	}
});

useAxios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		// const httpCode = error.response.status;
		// if (httpCode === 401) {
		// 	window.location.href = "/login";
		// 	Cookie.remove("token");
		// 	return;
		// }
		alert(error.response.data.message);

		throw new Error(JSON.stringify(error.response));
	}
);
