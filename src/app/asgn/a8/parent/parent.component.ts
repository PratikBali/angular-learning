import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public childData;
  public abc = '';

  public mymsg = 'hi';

  constructor() { }

  ngOnInit() {
  }

  sendToChild() {
    this.mymsg = 'parent changed';
  }

}
