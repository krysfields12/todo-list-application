import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from './pages/new-todo/new-todo.component';
import { TodoViewComponent } from './pages/todo-view/todo-view.component';

const routes: Routes = [
  {path: '', component: TodoViewComponent},
  {path: 'new-todo', component: NewTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
