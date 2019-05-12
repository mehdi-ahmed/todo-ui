import { Component, OnInit } from '@angular/core';
import {Todo} from '../domain/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoArray = [
    new Todo(1, 'clean up the room', new Date(), false),
    new Todo(2, 'work out', new Date(), false),
    new Todo(3, 'read a book', new Date(), false)
  ];




  constructor() { }

  ngOnInit() {
  }

}
