import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.scss']
})
export class TodoViewComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  createNewTodo() {
    this.taskService.createList("Testing", "Testing,", "7/11/2022").subscribe((response: any) => {
      console.log(response);
    })
  }
}
