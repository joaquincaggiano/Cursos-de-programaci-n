// React Hook
import { useReducer, useEffect } from "react";

// Context
import { EntriesContext } from "./";

// Reducer function
import { entriesReducer } from "./";

// API
import { entriesApi } from "../../apis";

// Snackbar
import { useSnackbar } from "notistack";

const Entries_INITIAL_STATE = {
  entries: [],
};

export const EntriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  // snackbar
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description) => {
    const { data } = await entriesApi.post("/entries", { description });

    dispatch({ type: "Add-Entry", payload: data });
  };

  const updateEntry = async (entry) => {
    try {
      const { data } = await entriesApi.put(`/entries/${entry._id}`, {
        description: entry.description,
        status: entry.status,
      });
      dispatch({ type: "Entry-Updated", payload: data });
      enqueueSnackbar("Entrada actualizada", {
        variant: "success",
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        }
      })
    } catch (error) {
      console.log(error);
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get("/entries");
    dispatch({ type: "Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const providerObject = {
    ...state,
    addNewEntry,
    updateEntry,
  };
  return (
    <EntriesContext.Provider value={providerObject}>
      {children}
    </EntriesContext.Provider>
  );
};
