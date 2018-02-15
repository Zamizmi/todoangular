import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent }      from './todos/todos.component';
import { InfoComponent }   from './info/info.component';
import { TodoDetailComponent }  from './todo-detail/todo-detail.component';



const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'info', component: InfoComponent },
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'detail/:id', component: TodoDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
