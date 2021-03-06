import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createList(title: string, description: string, dueDate: string) {
    // we want to send a web request to create a list
    return this.webReqService.post('todos', {title, description, dueDate})
  }

  getTodos() {
    return this.webReqService.get('todos');
  }

  getTodo(todoId:string) {
    return this.webReqService.get(`todos/${todoId}`);
  }
}
