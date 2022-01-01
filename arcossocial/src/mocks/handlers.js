import { rest } from 'msw'
import {endpointBaseUrl} from "../api/url";

export const handlers = [
    rest.post(`${endpointBaseUrl}/auth/login`, (req, res, ctx) => {
        const {username, password} = req.body;
        if(username === 'test') {
            return res(ctx.json({'token': 'testToken'}));
        }
        return res(ctx.status(403));
    }),
]