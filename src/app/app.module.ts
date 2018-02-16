import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoModule } from './todo-module/todo-module.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { TodoService } from './todo.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TodoModule.forRoot(),
    HttpClientModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
