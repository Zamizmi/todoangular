import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { MaterialModule } from '../shared/MaterialModule';
import { MatTableDataSource } from '@angular/material';

//import { TodoService }  from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})

export class TodoDetailComponent {
  @Input() dataSource: MatTableDataSource<Todo>;
  @Output() deleteListen: EventEmitter<any> = new EventEmitter();
  @Output() upVoteListen: EventEmitter<any> = new EventEmitter();
  @Output() downVoteListen: EventEmitter<any> = new EventEmitter();
  @Output() changeCompletedListen: EventEmitter<any> = new EventEmitter();
  displayedColumns = ['name', 'completed', 'votes','created_at','actions'];



  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor() {}

  changeCompleted(todo: Todo): void {
    this.changeCompletedListen.emit(todo);
  }

  upVote(todo: Todo): void {
    this.upVoteListen.emit(todo);
  }

  downVote(todo: Todo): void {
    this.downVoteListen.emit(todo);
  }

  delete(todo: Todo): void {
    this.deleteListen.emit(todo);
  }
}
