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
                alertText: 'User created!',
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
        default:
            throw new Error(`no such action: ${action.type}`);
    }
}

export default reducer;