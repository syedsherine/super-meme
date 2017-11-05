import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private http: Http) {
   }

   getTasks() {
      return this.http.get("http://localhost:3000/api/tasks").map(res => res.json());
   }

   addTask(newTask) {
      return this.http.post("http://localhost:3000/api/task", newTask).map(res => res.json());
   }

   deleteTask(id) {
      return this.http.delete("/api/task/"+id).map(res => res.json());
   }

   updateStatus(task) {
     return this.http.put("/api/task/"+task._id, task).map(res => res.json());
   }
}
