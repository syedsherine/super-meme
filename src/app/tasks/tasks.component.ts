import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from "./Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent implements OnInit {
  tasks: Task[];
  title: string;
  constructor(private taskService:TaskService) { 
    this.taskService.getTasks().subscribe(tasks => {
        this.tasks = tasks;
    })
  }

  ngOnInit() {
  }

  addTask(event) {
    event.preventDefault();
    console.log(this.title)
    const newTask = {
      title: this.title,
      isDone: false
    };
    this.taskService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
      this.title = "";
    });
  }

  deleteTask(id) {
    const tasks = this.tasks;
     this.taskService.deleteTask(id).subscribe(task => {
        if(task.n == 1) {
           for(let i=0; i<tasks.length; i++) {
             if(tasks[i]._id == id) {
               tasks.splice(i, 1);
             }
           }
        }
     });
  }

  updateStatus(task) {
    const _task = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };
    this.taskService.updateStatus(_task).subscribe(task => {
        task.isDone = !task.isDone;
    });
  }

}
