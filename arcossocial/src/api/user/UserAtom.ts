import {atom, selector} from "recoil";
import {getUserByCode, User} from "./user";

export const loggedUserAtom = atom<User | null>({
    key: 'loggedUserAtom',
    default: null,
});