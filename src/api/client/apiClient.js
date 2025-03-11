import axios from "axios";

// Create an instance of Axios
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // Set a timeout for API calls (10 sec)
});

// Add request interceptor (e.g., auth token)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Example token retrieval
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor (global error handling)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
