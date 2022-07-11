import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createTodo(title: string, description: string, dueDate: string) {
    this.taskService.createList(title, description, dueDate).subscribe((response: any) => {
      console.log(response);
      // Now we navigate to /todos/response._id
    })
  }

}
