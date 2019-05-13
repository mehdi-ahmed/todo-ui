import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../domain/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo [];
  messageDelete: string;

  constructor(private todoService: TodoDataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.todoService.retrieveAllTodos('mehdi').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  editTodoItem() {
    console.log('edit');
  }

  deleteTodoItem(id) {
    console.log('delete');
    this.todoService.deleteTodo('mehdi', id).subscribe(
      response => {
        this.todos = response;
        this.messageDelete = 'Item deleted successfully !';
        this.getAll();
      }
    );
  }
}
