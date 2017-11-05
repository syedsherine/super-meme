import {Injectable, EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class MyNewServiceService {
  
  user: string = "";

  constructor(private http: Http) { }

  pushData = new EventEmitter<string>();

  getCurrentUser() {     
    return this.http.get("https://angular2db-53cb8.firebaseio.com/data.json");
  }

  setUser(value: string) {
   this.user = value;
  }

  reveiveData(value: string) {
    this.pushData.emit(value);
  }

}
