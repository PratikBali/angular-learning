import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newparent',
  templateUrl: './newparent.component.html',
  styleUrls: ['./newparent.component.scss']
})
export class NewparentComponent implements OnInit {

  public ChildData;

  public mymsg = 'hiiiiiii';
  constructor() { }

  ngOnInit() {
  }

  sendToChild() {
    this.mymsg = 'hiiii from parent';
  }

}
