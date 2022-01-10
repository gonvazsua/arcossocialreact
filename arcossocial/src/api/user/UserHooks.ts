import {useRecoilState} from "recoil";
import {loggedUserAtom} from "./UserAtom";
import {useEffect} from "react";
import {getUserByCode, User} from "./user";
import {LocalStorageKey} from "../../util/localStorageKey";

export const useLoggedUser = () => {
    const [loggedUser, setLoggedUser] = useRecoilState(loggedUserAtom);

    if(loggedUser) {
        return;
    }

    const loggedUserCode = localStorage.getItem(LocalStorageKey.USER_CODE);
    if(loggedUserCode) {
        getUserByCode(loggedUserCode)
            .then(user => setLoggedUser(user));
    }

    return loggedUser;
};