import { createContext, PropsWithChildren, useReducer, Dispatch } from "react";
import { Task, TaskAction } from "./interfaces";
import { tasksReducer } from "./reducer";

const initialTasks: Task[] = [
  { id: 0, text: "Priprava na izpit iz matematike", done: true },
  { id: 1, text: "Obisk predavanja iz programiranja", done: false },
  { id: 2, text: "Pisanje seminarske naloge", done: false },
];

// eslint-disable-next-line react-refresh/only-export-components
export const TasksContext = createContext<Task[] | null>(null);
// eslint-disable-next-line react-refresh/only-export-components
export const TasksDispatchContext = createContext<Dispatch<TaskAction> | null>(
  null
);

export function TasksProvider({ children }: PropsWithChildren) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
