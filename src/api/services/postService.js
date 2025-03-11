import apiClient from "../client/apiClient";
import { API_ENDPOINTS } from '../endPoints';

export const PostService = {
  getAllPosts: async () => {
    const response = await apiClient.get(API_ENDPOINTS.POSTS);
    return response.data;
  },

  getPostById: async (id) => {
    const response = await apiClient.get(`${API_ENDPOINTS.POSTS}/${id}`);
    return response.data;
  },

  createPost: async (postData) => {
    const response = await apiClient.post(API_ENDPOINTS.POSTS, postData);
    return response.data;
  },

  updatePost: async (id, postData) => {
    const response = await apiClient.put(`${API_ENDPOINTS.POSTS}/${id}`, postData);
    return response.data;
  },

  deletePost: async (id) => {
    await apiClient.delete(`${API_ENDPOINTS.POSTS}/${id}`);
  },
};
