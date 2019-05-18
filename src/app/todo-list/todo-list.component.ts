import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../domain/Todo';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth-services.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo [];
  messageDelete: string;
  private success = new Subject<string>();

  constructor(private todoService: TodoDataService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.getAll();
    this.alertTimerClose();
  }

  getAll() {
    this.todoService.retrieveAllTodos(this.authService.getAuthenticatedUser()).subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  editTodoItem(id) {
    this.router.navigate(['todos', id]);
  }

  deleteTodoItem(id) {
    this.success.next('Item deleted !');
    this.todoService.deleteTodo(this.authService.getAuthenticatedUser(), id).subscribe(
      response => {
        this.todos = response;
        this.messageDelete = 'Item deleted successfully !';
        this.getAll();
      }
    );
  }

  alertTimerClose() {
    this.success.subscribe((message) => this.messageDelete = message);
    this.success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.messageDelete = null);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }
}
