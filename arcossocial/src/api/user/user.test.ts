import {getUserByCode, User} from "./user";
import {mockData} from "../../mocks/mockData";

describe('User API', () => {

    test('should get logged user from API', async () => {
        const expectedUser: User = mockData.loggedUser[0];
        const user: User = await getUserByCode('SSO018');
        expect(user).not.toBeNull();
        expect(user.userCode).toEqual(expectedUser.userCode);
    });
});