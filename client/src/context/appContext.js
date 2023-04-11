import { useContext, useReducer, createContext } from "react";
import reducer from "./reducers";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertType: '',
    alertText: ''
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const showDangerAlert = () => {
        dispatch({ type: 'SHOW_DANGER_ALERT' });
    }
    const showSuccessAlert = () => {
        dispatch({ type: 'SHOW_SUCCESS_ALERT' });
    }
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: 'CLEAR_ALERT' });
        }, 2500);
    }

    return (
        <AppContext.Provider
            value={{ 
                ...state, 
                showDangerAlert,
                showSuccessAlert,
                clearAlert, 
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext };
