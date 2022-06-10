export const initialState = {
    user: {},
    isLoggedIn: false
}
const appReducer = (state,action) => {
    const {type,payload} = action; 

    switch(type){
        case 'LOG_IN':
            console.log('logged-in',payload)
        return{
            ...state
        };

        case 'LOG_OUT':
            console.log('logged-out',payload)
        return{
            ...state
        };

        default:
             throw new Error(`No case for type ${type} found in appReducer.`);
    }


}

export default appReducer