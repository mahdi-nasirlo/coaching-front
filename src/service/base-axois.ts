import axios, {AxiosInstance} from "axios";

const baseAxois: AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1`,
});

// baseAxois.interceptors.request.use(async (config) => {
//     const token = await getSessionToken(); // Fetch the session on both client and server side
//
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`; // Add the token to the header
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

export default baseAxois;
