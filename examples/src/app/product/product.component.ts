import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from "../common/my-new-service.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']  
})
export class ProductComponent implements OnInit {

  private userName: string;

  constructor(private myService: MyNewServiceService) { }

  ngOnInit() {
  }

  setUser() {
    this.myService.setUser("Mani");   
  }


  getUser() {
    //this.userName = this.myService.getCurrentUser();
    console.log(this.userName);
  }

}
