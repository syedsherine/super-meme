import { Component, OnInit, OnDestroy, AfterViewInit,  ElementRef } from '@angular/core';
import { Router } from '@angular/router'
import { MyNewServiceService } from "../common/my-new-service.service";
import { Response } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
 

  constructor(private router: Router, public myService: MyNewServiceService, private elementRef: ElementRef) { }
  
  public username: string;

  private parent: string = "Passing data from parent component";

  deals = [{title:"Accessories", name:"Shoes",price:"500"}, {title:"Groceries", name:"Pencil",price:"10"}, {title:"Travels",name:"Bag",price:"500"}];

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('.username').style.color = "red";
  }

  setUser() {
    this.myService.setUser("syed");    
  }
 
  getUser() {   
    this.username = "syed";  
     this.myService.getCurrentUser().subscribe(function(data:Response) {    
     console.log(data.json());
     //this.username = "syed";
    },
    function() {
    });  
  }  
  
  gotoProductsPage() {
    this.router.navigate(['/product']);
  }

  sendData() {
    this.myService.reveiveData("Apple");
  }

  ngOnDestroy() {
    console.log("Navigating from home page to other page.");
  }

  onNotify(message: string) {
    console.log(message);
  }

}
