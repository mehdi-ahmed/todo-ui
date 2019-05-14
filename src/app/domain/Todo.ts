export class Todo {
  id: number;
  userName: string;
  description: string;
  targetDate: Date;
  done: boolean;

  constructor(id, userName, description, date, done) {
    this.id = id;
    this.description = description;
    this.targetDate = date;
    this.done = done;
    this.userName = userName;
  }
}
