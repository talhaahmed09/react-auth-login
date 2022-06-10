import { createContext, useContext, useReducer } from "react";
import appReducer, { initialState } from "./AppReducer";
import { users } from "../../data/data";
import { useNavigate } from "react-router-dom";

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const data = users;

  const navigate = useNavigate();

  const logIn = (user) => {
    let userData = null;
    console.log(user, data);
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
        navigate('/dashboard')
      }, 5000);
    } else {
      return dispatch({
        type: "SET_LOGIN_ERROR",
      });
    }
  };

  const LogOut = () => {};

  const values = {
    state:state,
    logIn,
    LogOut,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("No context available");
  }
  return context;
};
