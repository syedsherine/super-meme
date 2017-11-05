import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { MyNewServiceService } from "../common/my-new-service.service";

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  @Input() title;
  @Input() name;
  @Input() price;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  private subscription: Subscription;
  private value:string;

  disableButton = true;
  constructor(private myService: MyNewServiceService) { //this.title="Hi Syed";
 }
  ngOnInit() {
    this.subscription = this.myService.pushData.subscribe( data => { this.value = data });
  } 
  enableButton() {
    this.disableButton = false;
  }

  clickButton() {
    this.notify.emit("Passing data from Child");
  }
}
