import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoDataService} from '../service/data/todo-data.service';
import {DatePipe} from '@angular/common';
import {Todo} from '../domain/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  id: number;
  date: string;
  editTodoForm: FormGroup;
  todo: Todo;
  userName: 'Mehdi';
  targetDate;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private todoDataService: TodoDataService,
    private datePipe: DatePipe,
    private router: Router) {
  }

  ngOnInit() {

    this.editTodoForm = this.formBuilder.group({
      description: ['', Validators.required],
      done: [false, Validators.required]
    });

    this.id = +this.route.snapshot.params.id;

    if (this.id !== -1) {
      this.todoDataService.retrieveTodo('mehdi', this.id)
        .subscribe(
          data => {
            this.editTodoForm.controls.done.setValue(data.done);
            this.editTodoForm.controls.description.setValue(data.description);
            this.targetDate = {year: 2022, month: 12, day: 12};
            this.extractDate(data.targetDate);
          });
    } else {
      this.todo = new Todo(-1, this.userName, '', new Date(), false);
    }
  }

  get f() {
    return this.editTodoForm.controls;
  }

  private extractDate(date) {
    const targetDate = this.formatDate(date);
    const iniYear = Number(this.datePipe.transform(targetDate, 'yyyy'));
    const iniMonth = Number(this.datePipe.transform(targetDate, 'MM'));
    const iniDay = Number(this.datePipe.transform(targetDate, 'dd'));
    this.targetDate = {year: iniYear, month: iniMonth, day: iniDay};
  }

  private convertDatePicker(targetDate) {
    return new Date(targetDate.year, targetDate.month, targetDate.day);
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.editTodoForm.invalid || this.targetDate === undefined) {
      return;
    }

    this.userName = 'Mehdi';

    if (this.id === -1) {
      // Create new item
      this.todo.description = this.editTodoForm.value.description;
      this.todo.done = this.editTodoForm.value.done;
      this.todo.targetDate = this.convertDatePicker(this.targetDate);
      this.todo.userName = this.userName;
      this.todoDataService.addTodo(this.userName, this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos']);
          }
        );
    } else {
      this.todo = this.editTodoForm.value;
      this.todo.id = this.id;
      this.todo.userName = this.userName;
      this.todo.targetDate = this.convertDatePicker(this.targetDate);
      this.todoDataService.updateTodo(this.userName, this.id, this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos']);
          }
        );
    }
  }

  formatDate(date) {
    const datePipe = new DatePipe('en-US');
    this.date = datePipe.transform(date, 'yyyy-MM-dd');
    return this.date;
  }

  cancel() {
    this.router.navigate(['todos']);
  }
}
