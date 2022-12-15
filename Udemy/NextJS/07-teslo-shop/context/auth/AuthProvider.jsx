// React Hook
import { useEffect, useReducer } from "react";

// Next
import { useRouter } from "next/router";

// Context
import { AuthContext } from "./";

// Reducer function
import { authReducer } from "./";

// TesloApi
import { tesloApi } from "../../api";

// Cookies
import Cookies from "js-cookie";

// Axios
import axios from "axios";

const AUTH_INITIAL_STATE = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const router = useRouter();

  useEffect(() => {
    checkToken();
  }, []);
  
  const checkToken = async() => {
    if(!Cookies.get("token")) {
      return;
    }

    try {
      const { data } = await tesloApi.get("/user/validate-token");
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "Auth - Login", payload: user });
    } catch (error) {
        Cookies.remove("token");
    }
  }

  const loginUser = async (email, password) => {
    try {
      const { data } = await tesloApi.post("/user/login", { email, password });
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "Auth - Login", payload: user });
      return true;
    } catch (error) {
        return false;
    }
  };

  const registerUser = async(name, email, password) => {
    try {
      const { data } = await tesloApi.post("/user/register", { name, email, password });
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "Auth - Login", payload: user });
      return {
        hasError: false,

      }
    } catch (error) {
      if(axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message
        }
      }

      return {
        hasError: true,
        message: "No se pudo crear el usuario - intente de nuevo"
      }
    }
  }

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("cart");
    router.reload();
  }

  const providerObject = {
    ...state,
    loginUser,
    registerUser,
    logout
  };

  return (
    <AuthContext.Provider value={providerObject}>
      {children}
    </AuthContext.Provider>
  );
};
