import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http/';

import { TodosComponent } from '../todos/todos.component';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { TodoService } from '../todo.service';
import { MaterialModule } from '../shared/MaterialModule';
import { BoldDirective } from '../bold.directive';

@NgModule({
  declarations: [
    TodosComponent,
    BoldDirective,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule
  ],
  exports:[
      TodosComponent,
      BoldDirective
  ]
})

export class TodoModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoModule,
      providers: [TodoService]
    }
  }
}
