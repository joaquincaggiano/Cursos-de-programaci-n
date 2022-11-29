// React Hook
import { useReducer } from "react";

// Context
import { UIContext } from "./";

// Reducer function
import { uiReducer } from "./";

const UI_INITIAL_STATE = {
  isMenuOpen: false,
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "ToggleMenu" });
  };

  const providerObject = {
    ...state,
    toggleSideMenu,
  };

  return (
    <UIContext.Provider value={providerObject}>{children}</UIContext.Provider>
  );
};
