export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export interface AddAction {
  type: "added";
  id: number;
  text: string;
}

export interface ChangeAction {
  type: "changed";
  task: Task;
}

export interface DeleteAction {
  type: "deleted";
  id: number;
}

export type TaskAction = AddAction | ChangeAction | DeleteAction;
