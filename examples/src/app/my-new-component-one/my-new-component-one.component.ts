import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-new-component-one',
  templateUrl: './my-new-component-one.component.html',
  styleUrls: ['./my-new-component-one.component.css']
})
export class MyNewComponentOneComponent implements OnInit {
  
  user = {
    firstname:"",
    lastname:"",
    email:"",
    empid:0
  }

  formStatus = false;

  items = [{firstname:"syed", lastname:"ibrahim", email:"syed@gmail.com", empid:12345}, 
          {firstname:"sunil", lastname:"kumar", email:"sunil@gmail.com", empid:42424},
          {firstname:"ragva", lastname:"larance", email:"ragava@gmail.com", empid:41424}];

  onSubmit() {
    console.log(this.user);
    let obj = Object.assign({},this.user);
    this.items.push(obj);  
    this.formStatus = true;  
  }
   
  constructor() { }

  ngOnInit() {
    console.log("component is created");
  }

  ngOnDestroy() {
    console.log("component is destroyed");
  }

}
