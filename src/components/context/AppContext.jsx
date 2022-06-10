import { createContext, useContext, useReducer } from "react"
import appReducer, {initialState} from "./AppReducer";

const appContext = createContext(null);

const AppContext = (children) => {

    const [state, dispatch] = useReducer(appReducer,initialState);

    const logIn = (user) => {

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

export default AppContext

export const useApp = () => {
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error('No context available')
    }
    return context
}