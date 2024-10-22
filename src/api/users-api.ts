import axios, {AxiosResponse} from 'axios'
import {InitialStateType, UserType} from "../../src/reducers/users-reducer";


const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

const instance = axios.create({
    baseURL,
});

export type ResponseType<D = {}> = {
    resultCode: number;
    messages: Array<string>;
    fieldsErrors: Array<string>;
    data: D;
};

export const usersAPI = {
    async getUsers(newUrl: string) {
        return axios.get<InitialStateType>(newUrl);
    },
};
