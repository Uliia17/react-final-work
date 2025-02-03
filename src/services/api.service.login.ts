import axios from "axios";
import { IUser } from "../models/IUser.ts";
import { IUserResponse } from "../models/IUserResponse.ts";
import { retriveLocalStorage } from "./helpers.ts";
import { IUserWithTokens } from "../models/IUserWithTokens.ts";
import { ITokenPair } from "../models/ITokenPair.ts";

type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: { Authorization: '' }
});

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === 'GET') {
    }
    return request;
})

export const login = async ({ username, password, expiresInMins }: LoginData): Promise<IUserWithTokens> => {
    const { data: userWithTokens } = await axiosInstance.post<IUserWithTokens>('/auth/login', { username, password, expiresInMins });
        localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthUsers = async (): Promise<IUser[]> => {
    const { data: { users } } = await axiosInstance.get<IUserResponse>('/users');
    return users;
}

export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');

    const { data: { accessToken, refreshToken } } = await axiosInstance.post<ITokenPair>('/auth/refresh',
        { refreshToken: iUserWithTokens.refreshToken, expiresInMin: 1 });

    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken

    localStorage.setItem('user', JSON.stringify(iUserWithTokens))
}
