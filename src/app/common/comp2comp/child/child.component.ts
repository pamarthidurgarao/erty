import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() count: number;
  @Output() abc = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.count = this.count + 5;
  }

  inc() {
    this.count = this.count + 1;
    this.abc.emit(this.count);
  }
}
