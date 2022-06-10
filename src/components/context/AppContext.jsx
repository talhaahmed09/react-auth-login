import { createContext, useContext, useReducer } from "react"
import appReducer, {initialState} from "./AppReducer";
import { users} from "../../data/data";

const AppContext = createContext(initialState);

export const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(appReducer,initialState);
    const data = users;

    const logIn = (user) => {
        let userData = null;
        console.log(user,data)
        dispatch({
            type: 'SET_LOGIN'
        });

       userData = data.find(item => item.name === user.name);

       if(userData){
           dispatch({
               type: 'SET_LOGIN_SUCCESS',
               payload:{
                   user : userData
               }
           });
           return 
       }else {
           return dispatch({
            type: 'SET_LOGIN_ERROR',
        })
       }
    }

    const LogOut = () => {

    }

    const values = {
        user:state.user,
        logIn,
        LogOut
    }
  return (
    <AppContext.Provider value={values} >{children}</AppContext.Provider>
  )
}

export const useApp = () => {
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error('No context available')
    }
    return context
}