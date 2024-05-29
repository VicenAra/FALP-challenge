import axios from 'axios';
// using cors-anywhere to bypass CORS policy
const API_URL = `http://localhost:8080/https://superheroapi.com/api/`;
const ACCESS_TOKEN = import.meta.env.VITE_SUPER_HERO_API_ACCESS_TOKEN;

const apiClient = axios.create({
    baseURL: `${API_URL}/${ACCESS_TOKEN}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const searchSuperHero = async (name:string) => {
    try {
        const response = await apiClient.get(`/search/${name}/`);
        return response.data;
    } catch (error) {
        console.error('Error searching super hero', error);
        throw error;
    }
}

export const getSuperHeroById = async (id:number) => {
    try {
        const response = await apiClient.get(`/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error getting super hero by id', error);
        throw error;
    }
}