import { CommonModule } from '@angular/common';
import { NgModule, } from '@angular/core';

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
    CommonModule,
    MaterialModule
  ],
  providers: [TodoService],
  exports:[
      TodosComponent
  ]
})

export class TodoModule {
}
