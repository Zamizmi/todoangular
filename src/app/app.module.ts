import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoService } from './todo.service';
import { NotificationService } from './notification.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { AppRoutingModule } from './/app-routing.module';
import { InfoComponent } from './info/info.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { MyOwnCustomMaterialModule } from './MyOwnCustomMaterialModule';
import { BoldDirective } from './bold.directive';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent,
    NotificationsComponent,
    InfoComponent,
    TodoSearchComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MyOwnCustomMaterialModule
  ],
  providers: [
    TodoService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
