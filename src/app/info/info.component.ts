import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  todos : Todo[];
  dataSource : MatTableDataSource<Todo>;
  displayedColumns = ['name', 'votes'];

  selectedTodo: Todo;

  constructor(private todoService: TodoService) { }

  updateSource(): void {
    this.dataSource = new MatTableDataSource<Todo>(this.todos);
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos.filter(todo => todo.completed === false).sort((t1, t2) => t2.votes - t1.votes).slice(0,3);
    this.updateSource();
  });
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  ngOnInit() {
    this.getTodos();
  }


}
