import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  name: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  name: "",
};

type LoginPayload = {
  userName: string;
  name: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return { validando: false, token: null, userName: "", name: "" };

    case "login":
      const { name, userName } = action.payload;
      return {
        validando: false,
        token: "abc123",
        userName,
        name,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: { userName: "joaquincaggiano", name: "Joaquín" },
    });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>

      {state.token ? (
        <>
          <div className="alert alert-success">
            Autenticado com: {state.name}
          </div>
          <button className="btn btn-danger" onClick={logout}>
            Log out
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No autenticado</div>
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};
