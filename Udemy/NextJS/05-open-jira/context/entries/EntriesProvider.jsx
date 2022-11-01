// React Hook
import { useReducer } from "react";

// Context
import { EntriesContext } from "./";

// Reducer function
import { entriesReducer } from "./";

// uuid
import { v4 as uuidv4 } from "uuid";

const Entries_INITIAL_STATE = {
  entries: [
    {
      id: uuidv4(),
      description: "Alguna descripción",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      id: uuidv4(),
      description: "Otra descripción",
      status: "in-progress",
      createdAt: Date.now(),
    },
    {
      id: uuidv4(),
      description: "Última descripción",
      status: "finished",
      createdAt: Date.now(),
    },
  ],
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const providerObject = {
    ...state,
  };
  return (
    <EntriesContext.Provider value={providerObject}>
      {children}
    </EntriesContext.Provider>
  );
};
