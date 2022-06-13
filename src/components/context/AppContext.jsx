import { createContext, useContext, useMemo, useReducer } from "react";
import appReducer, { initialState } from "./AppReducer";
import { users } from "../../data/data";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/LocalStorage";

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [isLoggedIn,setisLoggedIn] = useLocalStorage('isLoggedIn',null);
  const [user,setUser] = useLocalStorage('user',null);
  const data = users;

  const navigate = useNavigate();

  const logIn = (user) => {
    let userData = null;
    dispatch({
      type: "SET_LOGIN",
    });

    userData = data.find((item) => item.username === user.username);

    if (userData) {
      return setTimeout(() => {
        dispatch({
          type: "SET_LOGIN_SUCCESS",
          payload: {
            user: userData,
          },
        });
        console.log(state)
        setisLoggedIn(true)
        setUser(userData)
        navigate('/dashboard')
      }, 5000);
    } else {
      return dispatch({
        type: "SET_LOGIN_ERROR",
      });
    }
  };

  const LogOut = () => {};

  const values = useMemo(() => ( {
    state:state,
    logIn,
    LogOut,}), [state.user])
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("No context available");
  }
  return context;
};
