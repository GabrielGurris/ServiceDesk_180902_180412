import { setAccount, setToken, setRefreshToken, removeAccount, removeToken, removeRefreshToken } from '../helpers/account';
import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../actions/accountActions';


const initialState = {
    account: null,
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    let response;
    let account;
    let token;
    let refreshToken;

    switch (type) {
        case SIGN_IN:

            response = payload ? payload.data : null;
            account = response ? response.account : null;
            token = response ? response.token : null;
            refreshToken = response ? response.refreshToken : null;

            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken);


            return { ...initialState, account };

        case SIGN_UP:
            response = payload ? payload.data : null;
            account = response ? response.newAccount : null;
            token = response ? response.token : null;
            refreshToken = response ? response.refreshToken : null;

            if (account) setAccount(account);
            if (token) setToken(token);
            if (refreshToken) setRefreshToken(refreshToken);

            return { ...initialState, account };

        case SIGN_OUT:
                removeAccount();
                removeToken();
                removeRefreshToken();
            return {...initialState, account: null};    
        default:
            return state;
    }
}


