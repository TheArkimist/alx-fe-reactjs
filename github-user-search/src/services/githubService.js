import axios from "axios";
import { useEffect } from "react";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: token ?{
        Authorization: `Bearer ${token}`
    }: {},
});

export const fetchUserData = async (username) => {
    try {
        const response = await api.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};
