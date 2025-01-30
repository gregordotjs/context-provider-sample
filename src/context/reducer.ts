import { Task, TaskAction } from "./interfaces";

export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];

    case "changed":
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));

    case "deleted":
      return tasks.filter((t) => t.id !== action.id);

    default:
      throw new Error("Unknown action: " + (action as TaskAction).type);
  }
}
