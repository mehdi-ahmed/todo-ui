export class Todo {
  id: number;
  description: string;
  targetDate: Date;
  isDone: boolean;

  constructor(id, description, date, done) {
    this.id = id;
    this.description = description;
    this.targetDate = date;
    this.isDone = done;
  }
}
