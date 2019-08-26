import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.scss']
})
export class NewchildComponent implements OnInit {

  ChildData = '';

  @Input() public parentData;
  @Output() public myobjnew = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  SendToPareant() {
    console.log('data from child:', this.ChildData);
    this.myobjnew.emit(this.ChildData);
  }

}
