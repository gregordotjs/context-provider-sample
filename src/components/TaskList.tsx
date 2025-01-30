import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useTasks } from "../context";
import { Task } from "../context/interfaces";
import { getTaskStatus } from "../helpers";

export function TaskList() {
  const tasks = useTasks();
  const [selectedTask, setSelectedTask] = useState<Task>();

  return (
    <Box>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            component={Button}
            onClick={() => setSelectedTask(task)}
          >
            <ListItemText
              primary={task.text}
              secondary={getTaskStatus(task.done)}
            />
          </ListItem>
        ))}
      </List>
      {selectedTask && (
        <Box sx={{ mt: 2, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
          <Typography variant="h6">Podrobnosti naloge</Typography>
          <Typography>ID: {selectedTask.id}</Typography>
          <Typography>Opis: {selectedTask.text}</Typography>
          <Typography>Stanje: {getTaskStatus(selectedTask.done)}</Typography>
        </Box>
      )}
    </Box>
  );
}
