import axios from "axios";

const API_URL = "https://blog-api-prod.fly.dev/";

const apiAuthorized = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

const api = axios.create({
    baseURL: API_URL,
});

export async function getPosts() {
    try {
        const response = await apiAuthorized.get("posts");

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getPost(id) {
    try {
        const response = await apiAuthorized.get(`posts/${id}`);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function createPost(post) {
    try {
        const response = await apiAuthorized.post("posts", post);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function updatePost(post) {
    try {
        const response = await apiAuthorized.put(`posts/${post._id}`, post);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function deletePost(id) {
    try {
        const response = await apiAuthorized.delete(`posts/${id}`);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getPostComments(postId) {
    try {
        const response = await api.get(`posts/${postId}/comments`);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function deletePostComment(postId, id) {
    try {
        const response = await apiAuthorized.delete(`posts/${postId}/comments/${id}`);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function login(password) {
    try {
        const response = await api.post("login", { password });

        return response;
    } catch (error) {
        return error.response;
    }
}
