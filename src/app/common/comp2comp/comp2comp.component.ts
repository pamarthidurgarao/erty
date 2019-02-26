import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-comp2comp',
  templateUrl: './comp2comp.component.html',
  styleUrls: ['./comp2comp.component.css']
})
export class Comp2compComponent implements OnInit, AfterViewInit {

  message: string;
  parentData = 100000000;
  @ViewChild
    (ChildComponent) child;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.currentMessage.subscribe(msg => this.message = msg)
  }
  ngAfterViewInit() {
  }
  receiveMessage($event) {
    this.parentData = $event;
  }
}
