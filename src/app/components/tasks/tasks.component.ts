import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  resultTasks: Task[] = [];
  // for add data we declare mytask (data binding from front end to back end api)
  mytask: Task = {
    label: '',
    completed: false
  }

  //
  editform = false;
  showForm = false;

  searchText = "";


  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }
  // method for retrive or getting task
  getTasks() {
    this.taskService.getall().subscribe((tasks: Task[]) => this.resultTasks = this.tasks = tasks);
  }
  // method for deleting task
  deleteTask(id: number | undefined) {
    this.taskService.delete(id)
      .subscribe(() => { this.resultTasks = this.tasks.filter(task => task.id != id) });
  }
  // method for adding task
  addTask() {
    this.taskService.Add(this.mytask)
      .subscribe((task) => {
        this.resultTasks = this.tasks.concat(task);
        this.resetTask();
        this.showForm = false;
      });
  }
  // method for clear form after adding or update task
  resetTask() {
    this.mytask = {
      label: '',
      completed: false
    }
  }
  changeStatusCompleted(task: Task) {
    this.taskService.changeStatus(task.id, task.completed)
      .subscribe(() => { task.completed = !task.completed });
  }

  editTask(task: Task) {
    // when click on edit show the form 
    this.showForm = true;
    this.mytask = task;
    this.editform = true;

  }
  updateTask() {
    this.taskService.Update(this.mytask)
      .subscribe((task) => {
        // after updating data in the server we reset the form to null and we change the button update to add
        this.resetTask();
        this.editform = false;
        this.showForm = false;

      });
  }

  // method search 
  SearchTasks() {
    this.resultTasks = this.tasks.filter((task) => {
      task.label.toLowerCase().includes(this.searchText.toLowerCase())
    });
  }



}
