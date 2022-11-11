// React Hooks
import { useContext, useMemo } from "react";

// Context
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

// Css
import styles from "./EntryList.module.css";

// Material UI
import { List, Paper } from "@mui/material";
import { EntryCard } from "./";

export const EntryList = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);
  // console.log("entries", entries)

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const onDropEntry = (e) => {
    const id = e.dataTransfer.getData("text");
    const entry = entries.find(oneEntry => oneEntry._id === id);
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          // overflow: "scroll",
          backgroundColor: "transparent",
          padding: 1,
        }}
      >
        <List sx={{ opacity: isDragging ? 0.5 : 1, transition: "all 0.3s" }}>
          {entriesByStatus.map((entry, i) => {
            return <EntryCard key={i} entry={entry} />;
          })}
        </List>
      </Paper>
    </div>
  );
};
