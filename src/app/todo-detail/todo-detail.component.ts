import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatTableDataSource} from '@angular/material';

import { TodoService }  from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})

export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo;
  dataSource : MatTableDataSource<Todo>;
  displayedColumns = ['name', 'completed','createdAt', 'votes', 'actions'];

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {}

  updateSource(): void {
    let todos = [];
    todos.push(this.todo);
    this.dataSource = new MatTableDataSource<Todo>(todos);
  }

  getTodo(): void {
  const id = +this.route.snapshot.paramMap.get('id');
    this.todoService.getTodo(id)
    .subscribe(todo => {
      this.todo = todo;
      this.updateSource();
    });
  }

  changeCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe();
  }

  save(): void {
   this.todoService.updateTodo(this.todo)
     .subscribe();
   }

  goBack(): void {
    this.location.back();
  }

  upVote(todo: Todo): void {
    todo.votes++;
    this.todoService.updateTodo(todo).subscribe();
  }

  downVote(todo: Todo): void {
    todo.votes--;
    this.todoService.updateTodo(todo).subscribe();
  }

  delete(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe(_ => this.updateSource());
    this.goBack();
  }

  ngOnInit(): void {
    this.getTodo();
  }

}
