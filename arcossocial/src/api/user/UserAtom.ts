import {atom} from "recoil";
import {User} from "./user";

export const loggedUserAtom = atom<User | null>({
    key: 'loggedUserAtom',
    default: null,
});