import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  apiUrl = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getall() {
    return this.http.get<Task[]>(this.apiUrl);

  }

  delete(id: number | undefined) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  Add(task: any) {
    return this.http.post<Task[]>(this.apiUrl, task);
  }

  Update(task: any) {
    return this.http.put(`${this.apiUrl}/${task.id}`, task);
  }

  changeStatus(id: number | undefined, completed: any) {
    return this.http.patch(`${this.apiUrl}/${id}`, { completed: !completed });
  }

}
