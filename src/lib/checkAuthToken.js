import {setHeaderToken} from './setHeaderToken'

export const checkAuthToken = () => {
    let jwtToken = localStorage.getItem('jwtToken');

    if (jwtToken) {
        // set headers
        setHeaderToken(jwtToken);
        // set auth is true
    } else {
        // delete header
        // set auth to false
        setHeaderToken();

    }
}