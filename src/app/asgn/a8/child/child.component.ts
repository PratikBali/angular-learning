import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  childData = '';

  @Input() public parentData;

  @Output() public myobj = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToParent() {
    console.log('data from child:', this.childData);
    this.myobj.emit(this.childData);
  }

}
