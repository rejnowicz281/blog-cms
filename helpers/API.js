import axios from "axios";

export async function getPosts() {
    try {
        const response = await axios.get("http://localhost:3000/posts");

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getPost(id) {
    try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function createPost(post) {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.post("http://localhost:3000/posts", post, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function updatePost(post) {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.put(`http://localhost:3000/posts/${post.id}`, post, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function deletePost(id) {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(`http://localhost:3000/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function getComments(postId) {
    try {
        const response = await axios.get(`http://localhost:3000/${postId}/comments`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export async function createComment(comment) {
    try {
        const response = await axios.post("http://localhost:3000/comments", comment);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

export async function deleteComment(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/comments/${id}`);

        return response;
    } catch (error) {
        return error.response;
    }
}

export async function login(password) {
    try {
        const response = await axios.post("http://localhost:3000/login", { password });

        return response;
    } catch (error) {
        return error.response;
    }
}