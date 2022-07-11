import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoViewComponent } from './pages/todo-view/todo-view.component';

import { HttpClientModule } from '@angular/common/http';
import { NewTodoComponent } from './pages/new-todo/new-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoViewComponent,
    NewTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
