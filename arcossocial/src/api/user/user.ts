import axios, {AxiosResponse} from "axios";
import {endpointBaseUrl} from "../url";

export interface User {
    creationDate: Date;
    entityCode: string;
    fullName: string;
    isActive: boolean;
    isAdmin: boolean;
    password: string;
    userCode: string;
    _id: string;
};

export async function getUserByCode(userCode: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
        try {
            const usersResponse: AxiosResponse<User[]> = await axios.get<User[]>(`${endpointBaseUrl}/users?userCode=${userCode}`);
            if(usersResponse.data && usersResponse.data.length > 0) {
                resolve(usersResponse.data[0]);
            }
            reject();
        } catch (err) {
            reject();
        }
    });
};