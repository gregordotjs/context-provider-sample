import { useState } from "react";
import { useTasksDispatch } from "../context";
import { Box, Button, TextField } from "@mui/material";

export function TaskCreator() {
  const dispatch = useTasksDispatch();
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text.trim().length > 0) {
      dispatch({ type: "added", id: Date.now(), text });
      setText("");
    }
  };

  return (
    <div>
      <TextField
        label="Nova naloga"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Box mt={2}>
        <Button onClick={handleAddTask} variant="contained" color="primary">
          Dodaj nalogo
        </Button>
      </Box>
    </div>
  );
}
