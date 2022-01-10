import { rest } from 'msw'
import {endpointBaseUrl} from "../api/url";
import {mockData} from "./mockData";

export const handlers = [
    rest.post(`${endpointBaseUrl}/auth/login`, (req, res, ctx) => {
        const {username, password} = req.body;
        if(username === mockData.loggedUser[0].userCode) {
            return res(ctx.json({'token': 'testToken'}));
        }
        return res(ctx.status(403));
    }),

    rest.get(`${endpointBaseUrl}/users`, (req, res, ctx) => {
        const userCode = req.url.searchParams.get('userCode')
        if(userCode === 'SSO018') {
            return res(ctx.json(mockData.loggedUser));
        }
        return res(ctx.status(200));
    }),
]