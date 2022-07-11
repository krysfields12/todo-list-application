import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from './pages/new-todo/new-todo.component';
import { TodoViewComponent } from './pages/todo-view/todo-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch: 'full'},
  {path: 'new-todo', component: NewTodoComponent},
  {path: 'todos', component: TodoViewComponent},
  {path: 'todos/:todoId', component: TodoViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
