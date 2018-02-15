import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MatTableDataSource} from '@angular/material';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { catchError, map, tap, find } from 'rxjs/operators';

import { Todo } from './todo';
import { NotificationService } from './notification.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TodoService {

  private url = 'http://localhost:3000/todos';  // URL to the json-server

  constructor(
  private http: HttpClient,
  private notificationService: NotificationService) {}

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  private log(note: string) {
    this.notificationService.add('TodoService: ' + note);
  }

  getTodos (): Observable<Todo[]> {
  return this.http.get<Todo[]>(this.url)
    .pipe(tap(todos => this.log(`fetched todos`)),
      catchError(this.handleError('getTodos', []))
    );
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.url}/${id}`;
    return this.http.get<Todo>(url).pipe(
      tap(_ => this.log(`fetched todo id=${id}`)),
      catchError(this.handleError<Todo>(`getTodo id=${id}`))
    );
  }

  updateTodo (todo: Todo): Observable<Todo> {
    const url = `${this.url}/${todo.id}`;
    console.log(todo);
    return this.http.put(url, todo, httpOptions).pipe(
      tap(_ => this.log(`updated todo id=${todo.id}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  addTodo (todo: Todo): Observable<Todo> {
    todo.completed= false;
    todo.created_at = new Date();
    todo.votes = 0;
    return this.http.post<Todo>(this.url, todo, httpOptions).pipe(
      tap((todo: Todo) => this.log(`added todo w/ id=${todo.id}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  deleteTodo (todo: Todo | number): Observable<Todo> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Todo>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted todo id=${id}`)),
      catchError(this.handleError<Todo>('deleteTodo'))
    );
  }

  searchTodos(term: string): Observable<Todo[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Todo[]>(`${this.url}?q=${term}`).pipe(
      tap(_ => this.log(`found todos matching "${term}"`)),
      catchError(this.handleError('searchTodos', []))
    );

  }
}
