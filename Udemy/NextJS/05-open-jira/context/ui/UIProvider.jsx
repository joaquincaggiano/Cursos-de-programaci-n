// React Hook
import { useReducer } from "react";

// Context
import { UIContext } from "./";

// Reducer function
import { uiReducer } from "./";

const UI_INITIAL_STATE = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false
};

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAddingEntry = (isAddingEntry) => {
    dispatch({ type: "UI - Toggle New Entry", payload: isAddingEntry });
  }

  const startDragging = () => {
    dispatch({ type: "UI - Start Dragging" });
  }

  const endDragging = () => {
    dispatch({ type: "UI - End Dragging" });
  }

  const providerObject = {
    ...state,
    openSideMenu,
    closeSideMenu,
    setIsAddingEntry,
    startDragging,
    endDragging
  };

  return (
    <UIContext.Provider
      value={providerObject}
    >
      {children}
    </UIContext.Provider>
  );
};
