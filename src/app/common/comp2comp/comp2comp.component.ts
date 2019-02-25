import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-comp2comp',
  templateUrl: './comp2comp.component.html',
  styleUrls: ['./comp2comp.component.css']
})
export class Comp2compComponent implements OnInit, AfterViewInit {

  parentData = 100000000;
  @ViewChild
    (ChildComponent) child;
  constructor() { }

  ngOnInit() {
    console.log("1111111111");
  }
  ngAfterViewInit() {
    console.log("222222222");
    console.log(this.child.count);
  }

  receiveMessage($event) {
    this.parentData = $event;
  }

}
