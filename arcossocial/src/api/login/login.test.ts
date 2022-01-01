import {executeLogin, LoginResponse} from "./login";
import {AxiosResponse} from "axios";

describe('login', () => {

    test('should return user token when the login is success', async () => {
        const expectedResponse: LoginResponse = {token: 'testToken'};
        const response: AxiosResponse<LoginResponse> = await executeLogin('test', 'password');
        expect(response.status).toBe(200);
        expect(response.data).toEqual(expectedResponse);
    });

});