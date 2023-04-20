import axios from 'axios';

export const apiProducts = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/products`
});

export const apiAuth = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/auth`
})

export const apiFiles = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/files`
})

