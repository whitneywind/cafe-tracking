const reducer = (state, action) => {
    switch (action.type) {
        case 'DISPLAY_ALERT':
            return {
                ...state,
                showAlert: true,
                alertType: 'danger',
                alertText: 'Please provide correct details',
            };
        case 'CLEAR_ALERT':
            return {
                ...state,
                showAlert: false,
                alertType: '',
                alertText: ''
            };
        case 'REGISTER_USER_BEGIN':
            return {
                ...state,
                isLoading: true
                };
        case 'REGISTER_USER_SUCCESS':
            return {
                ...state,
                showAlert: true,
                alertType: 'success',
                alertText: 'User created! Redirecting you now',
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token
                };
        case 'REGISTER_USER_ERROR':
            return {
                ...state,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
                isLoading: false
                };
        case 'LOGIN_USER_BEGIN':
            return {
                ...state,
                isLoading: true
            }
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                showAlert: true,
                alertType: 'success',
                alertText: 'Success! Loading dashboard',
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token
                };
        case 'LOGIN_USER_ERROR':
            return {
                ...state,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg,
                isLoading: false
                };
        case 'LOGOUT_USER': 
                return {
                    ...state,
                    user: null,
                    token: null
                }
        case 'UPDATE_USER_SUCCESS':
            return {
                ...state,
                showAlert: true,
                alertType: 'success',
                alertText: 'User info updated!'
            };
        case 'UPDATE_USER_ERROR':
            return {
                ...state,
                showAlert: true,
                alertType: 'danger',
                alertText: action.payload.msg
            }
        case 'TOGGLE_SIDEBAR':
            return {
                ...state,
                showSidebar: !state.showSidebar
            }
        default:
            throw new Error(`no such action: ${action.type}`);
    }
}

export default reducer;