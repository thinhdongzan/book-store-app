import axios from 'axios';

const DEFAULT_BASE_URL = 'https://book-store-app-gvmk.onrender.com/api';
const BASE_URL = (import.meta?.env?.VITE_API_URL || DEFAULT_BASE_URL).replace(/\/$/, '');

const accessToken = localStorage.getItem('access_token');

const axiosInstance = axios.create({
	baseURL: BASE_URL + '/',
	timeout: 10000,
	headers: {
		...(accessToken ? { Authorization: 'Bearer ' + accessToken } : {}),
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;
		const configuredBase = axiosInstance.defaults.baseURL?.replace(/\/$/, '') || BASE_URL;
		const refreshEndpoint = configuredBase + '/token/refresh/';

		if (typeof error.response === 'undefined') {
			alert('A server/network error occurred. Please try again later.');
			return Promise.reject(error);
		}

		if (error.response.status === 401 && originalRequest?.url === refreshEndpoint) {
			window.location.href = '/login';
			return Promise.reject(error);
		}

		if (
			error.response.data?.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			const refreshToken = localStorage.getItem('refresh_token');
			if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
				const now = Math.floor(Date.now() / 1000);

				if (tokenParts.exp > now) {
					try {
						const resp = await axios.post(refreshEndpoint, { refresh: refreshToken });
						localStorage.setItem('access_token', resp.data.access);
						originalRequest.headers['Authorization'] = 'Bearer ' + resp.data.access;
						return axiosInstance(originalRequest);
					} catch (err) {
						console.error(err);
					}
				} else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/login';
				}
			} else {
				console.log('Refresh token not available');
				window.location.href = '/login';
			}
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;






