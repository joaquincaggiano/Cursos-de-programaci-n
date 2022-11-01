// React Hook
import { useReducer } from "react";

// Context
import { UIContext } from "./";

// Reducer function
import { uiReducer } from "./";

const UI_INITIAL_STATE = {
  sideMenuOpen: false,
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const providerObject = {
    ...state,
    openSideMenu,
    closeSideMenu,
  };

  return (
    <UIContext.Provider
      value={providerObject}
    >
      {children}
    </UIContext.Provider>
  );
};
