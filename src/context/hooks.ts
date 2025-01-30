import { Dispatch, useContext } from "react";
import { TasksContext, TasksDispatchContext } from "./provider";
import { Task, TaskAction } from "./interfaces";

export function useTasks(): Task[] {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }

  return context;
}

export function useTasksDispatch(): Dispatch<TaskAction> {
  const context = useContext(TasksDispatchContext);

  if (!context) {
    throw new Error("useTasksDispatch must be used within a TasksProvider");
  }

  return context;
}
