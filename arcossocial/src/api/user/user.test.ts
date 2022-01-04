import {AxiosResponse} from "axios";
import {getUserByCode, User} from "./user";
import {mockData} from "../../mocks/mockData";

describe('User API', () => {

    test('should get logged user from API', async () => {
        const user: User = await getUserByCode('SSO018');
        expect(user).not.toBeNull();
        expect(user).toEqual(mockData.loggedUser);
    });
});