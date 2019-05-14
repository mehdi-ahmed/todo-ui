import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TodoDataService} from '../service/data/todo-data.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  date: string;
  editTodoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private todoDataService: TodoDataService,
    private datePipe: DatePipe) {
  }

  ngOnInit() {

    this.editTodoForm = this.formBuilder.group({
      targetDate: ['', Validators.required],
      description: ['', Validators.required],
      done: ['', Validators.required],
    });


    this.id = this.route.snapshot.params.id;
    this.todoDataService.retrieveTodo('mehdi', this.id)
      .subscribe(
        data => {
          this.editTodoForm.controls.done.setValue(data.done);
          this.editTodoForm.controls.description.setValue(data.description);
          this.extracted(data.targetDate);
        });
  }

  private extracted(date) {
    const targetDate = this.formatDate(date);
    const iniYear = Number(this.datePipe.transform(targetDate, 'yyyy'));
    const iniMonth = Number(this.datePipe.transform(targetDate, 'MM'));
    const iniDay = Number(this.datePipe.transform(targetDate, 'dd'));
    this.editTodoForm.controls.targetDate.setValue({
      year: iniYear,
      month: iniMonth,
      day: iniDay
    });
  }

  saveTodo(date) {
  }

  formatDate(date) {
    const datePipe = new DatePipe('en-US');
    this.date = datePipe.transform(date, 'yyyy-MM-dd');
    return this.date;
  }


}
