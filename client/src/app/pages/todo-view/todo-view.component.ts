import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {

  todos: any;
  todo: any;
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params, "what are the params?")
        this.taskService.getTodo(params['todoId']).subscribe((todo: any) => {
          this.todo = todo
        })
      }
     
    )
    
    this.taskService.getTodos().subscribe((todos: any) => {
      this.todos = todos
    })
  }
}
function todoId(todoId: any) {
  throw new Error('Function not implemented.');
}

