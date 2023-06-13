import Axios from '../lib/Axios'

const errorHandler = async (dispatch, error) => {
    dispatch({
        type: 'error',
        message: error.response.data,
    })
}


export const fetchLogin = async (dispatch, userData, authDispatch) => {
    try {
        console.log('!@-------userData-------@!')
        console.log(userData)


        let response = await Axios.post('/users/login', userData)
        console.log('!@-------response-------@!')
        console.log(response)

        localStorage.setItem('jwtToken', response.data.token);

        authDispatch({
            type: 'AUTH_SUCCESS'
        })

        dispatch({
            type: 'login',
            data: {
                username: response.data.username,
                message: response.data.message
            }
        })
    } catch (error) {
        errorHandler(dispatch, error);
    }
}

export const registerUser = async (dispatch, userData) => {
    try {
        let response = await Axios.post('/users/register', userData)
        console.log('!@-------response-------@!')
        console.log(response.data);

        dispatch({
            type: 'register',
            payload: response.data,
        })
    } catch (error) {
        errorHandler(dispatch, error);
    }

}

export const logoutUser = async (dispatch, authDispatch) => {
    try {
        localStorage.removeItem('jwtToken');
        authDispatch({ type: "AUTH_FAILURE" })
        dispatch({
            type: 'logout',
        })
    } catch (error) {
        errorHandler(dispatch, error)
    }
}
// localStorage.removeItem('jwtToken')