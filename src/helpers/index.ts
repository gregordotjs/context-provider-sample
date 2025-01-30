export function getTaskStatus(done: boolean): string {
  return done ? "Opravljeno" : "Ni opravljeno";
}
