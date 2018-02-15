import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import {MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos : Todo[];
  dataSource : MatTableDataSource<Todo>;
  displayedColumns = ['id', 'name', 'completed', 'votes','actions'];

  constructor(private todoService: TodoService) {}

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  updateSource(): void {
    this.dataSource = new MatTableDataSource<Todo>(this.todos);
  }

  getTodos(): void {
    this.todoService.getTodos()
    .subscribe(todos => {
      this.todos = todos;
      this.updateSource();
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.todoService.addTodo({ name } as Todo)
    .subscribe(todo => {
      this.todos.push(todo);
      this.updateSource();
    });
  }

  changeCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe();
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
    this.todos = this.todos.filter(b => b !== todo);
    this.todoService.deleteTodo(todo).subscribe(_ => this.updateSource());
  }

  ngOnInit() {
    this.getTodos();
  }

}
