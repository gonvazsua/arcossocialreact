import { rest } from 'msw'

export const handlers = [
    rest.post('/login', (req, res, ctx) => {
        const {username, password} = req.body;
        if(username === 'test') {
            return res(ctx.status(200));
        }
        return res(ctx.status(403));
    }),
]