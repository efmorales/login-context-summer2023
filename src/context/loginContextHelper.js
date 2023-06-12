import Axios from '../lib/Axios'

const errorHandler = async (dispatch, error) => {
    dispatch({
        type: 'error',
        message: error.response.data,
    })
}


export const fetchLogin = async (dispatch, userData) => {
    try {
        console.log('!@-------userData-------@!')
        console.log(userData)


        let response = await Axios.post('/users/login', userData)
        console.log('!@-------response-------@!')
        console.log(response)

        localStorage.setItem('jwtToken', response.data.token);

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

export const logoutUser = async (dispatch, userData) => {
    dispatch ({
        type: 'logout',
    })
}
// localStorage.removeItem('jwtToken')