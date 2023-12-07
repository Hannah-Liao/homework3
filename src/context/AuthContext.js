import { createContext, useReducer } from "react";

const initial_state = {
  user: null,
  pw: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        user: action.payload,
        pw: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        pw: null,
      };

    default: return state
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  return <AuthContext.Provider value={{
    user: state.user,
    pw: state.password,
    dispatch,
  }}>
    {children}
  </AuthContext.Provider>
}