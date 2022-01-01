import axios, {AxiosResponse} from "axios";
import {endpointBaseUrl} from "../url";

export interface LoginResponse {
    token: string;
}

interface LoginRequest {
    username: string;
    password: string;
}

export async function executeLogin(username: string, password: string): Promise<AxiosResponse<LoginResponse>> {
    const loginRequest = {
        username, password
    };
    return await axios.post(`${endpointBaseUrl}/auth/login`, loginRequest);
};