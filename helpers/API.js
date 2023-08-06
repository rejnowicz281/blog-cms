import axios from "axios";

export async function getPosts() {
    try {
        const response = await axios.get("http://localhost:3000/posts");

        return response.data;
    } catch (error) {
        console.error(error.response.data.error.message);
    }
}

export async function getPost(id) {
    try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);

        return response.data;
    } catch (error) {
        console.error(error.response.data.error.message);
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
        return response.data;
    } catch (error) {
        console.error(error.response.data.error.message);
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
        return response.data;
    } catch (error) {
        console.error(error.response.data.error.message);
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
        return response.data;
    } catch (error) {
        console.error(error.response.data.error.message);
    }
}

export async function getComments(postId) {
    try {
        const response = await axios.get(`http://localhost:3000/${postId}/comments`);
        return response.data;
    } catch (error) {
        console.error(error.response.data.error.message);
    }
}

export async function createComment(comment) {
    try {
        const response = await axios.post("http://localhost:3000/comments", comment);
        return response.data;
    } catch (error) {
        console.error(error.response.data.error.message);
    }
}

export async function deleteComment(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/comments/${id}`);

        return response.data;
    } catch (error) {
        console.error(error.response.data.error.message);
    }
}

export async function login(password) {
    try {
        const response = await axios.post("http://localhost:3000/login", { password });

        const token = response.data.token;
        localStorage.setItem("token", token);
    } catch (error) {
        console.error(error.response.data.error.message);
    }
}
