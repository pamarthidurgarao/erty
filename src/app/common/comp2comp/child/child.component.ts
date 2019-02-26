import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  msg: string;
  @Input() count: number;
  @Output() abc = new EventEmitter<number>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.count = this.count + 5;
  }

  inc() {
    this.count = this.count + 1;
    this.abc.emit(this.count);
  }

  communicate() {
    debugger
    this.dataService.store(this.msg);
  }

}
