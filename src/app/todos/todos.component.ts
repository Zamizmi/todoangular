import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos : Todo[];
  dataSource : MatTableDataSource<Todo>;

  constructor(private todoService: TodoService) {
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
      this.getTodos();
    });
  }

  changeCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe(_ =>this.getTodos());
  }

  upVote(todo: Todo): void {
    todo.votes++;
    this.todoService.updateTodo(todo).subscribe(_ =>this.getTodos());
  }

  downVote(todo: Todo): void {
    todo.votes--;
    this.todoService.updateTodo(todo).subscribe(_ =>this.getTodos());
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(b => b !== todo);
    this.todoService.deleteTodo(todo).subscribe(_ => this.getTodos());
  }

  ngOnInit() {
    this.getTodos();

  }

}
