const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_DANGER_ALERT':
            return {
                ...state,
                showAlert: true,
                alertType: 'danger',
                alertText: 'Please provide all values',
            };
        case 'SHOW_SUCCESS_ALERT':
            return {
                ...state,
                showAlert: true,
                alertType: 'success',
                alertText: 'Success!'
            };
        case 'CLEAR_ALERT':
            return {
                ...state,
                showAlert: false,
                alertType: '',
                alertText: ''
            };
        default:
            throw new Error(`no such action: ${action.type}`);
    }
}

export default reducer;