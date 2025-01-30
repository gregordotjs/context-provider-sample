import {
  Box,
  Container,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import { TaskList, TaskCreator } from "./components";

export default function App() {
  const [view, setView] = useState<"list" | "add">("list");

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Upravljanje nalog z React Context
        </Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, newView) => newView && setView(newView)}
          sx={{ mb: 3 }}
        >
          <ToggleButton value="list">Poglej naloge</ToggleButton>
          <ToggleButton value="add">Dodaj nalogo</ToggleButton>
        </ToggleButtonGroup>
        {view === "list" ? <TaskList /> : <TaskCreator />}
      </Box>
    </Container>
  );
}
