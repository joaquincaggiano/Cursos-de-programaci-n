export const uiReducer = (state, action) => {
  switch (action.type) {
    case "ToggleMenu":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };

    default:
      return state;
  }
};
