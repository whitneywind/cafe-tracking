import { useContext, useReducer, createContext } from "react";
import reducer from "./reducers";
import axios from 'axios'

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

const initialState = {
    isLoading: false,
    showAlert: false,
    alertType: '',
    alertText: '',
    user: user ? JSON.parse(user) : null,
    token: token || null,
    cafeLocation: ''
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type: 'DISPLAY_ALERT' });
        clearAlert();
    }
    const addToLocalStorage = ({ user, token }) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
    }

    const clearLocalStorage = () => {
        localStorage.clear();
        // or just remove specific items..?
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: 'CLEAR_ALERT' });
        }, 2500);
    }


    // TO-DO make one function to both register and login users
    const registerUser = async (currentUser) => {
        dispatch({ type: 'REGISTER_USER_BEGIN' });
        try {
            const response = await axios.post('/api/v1/auth/register', currentUser);
            const { user, token } = response.data;
            dispatch({ 
                type: 'REGISTER_USER_SUCCESS',
                payload: {
                    user,
                    token
            }})
            addToLocalStorage(response.data)
            // clearLocalStorage()
        } catch (error) {
            dispatch({ 
                type: 'REGISTER_USER_ERROR',
                payload: {
                    msg: error.response.data.msg
            } })
        }
        clearAlert();
    }

    const loginUser = async (currentUser) => {
        dispatch({ type: 'LOGIN_USER_BEGIN' })
        try {
            const response = await axios.post('/api/v1/auth/login', currentUser);
            const { user, token } = response.data;
            dispatch({
                type: 'LOGIN_USER_SUCCESS',
                payload: {
                    user,
                    token
                }
            })
            addToLocalStorage(response.data)
        } catch (error) {
            dispatch({
                type: 'LOGIN_USER_ERROR',
                payload: {
                    msg: error.response.data.msg
                }
            })
        }
        clearAlert()
    }

    return (
        <AppContext.Provider
            value={{ 
                ...state, 
                displayAlert,
                clearAlert,
                registerUser,
                addToLocalStorage,
                clearLocalStorage,
                loginUser
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext };
