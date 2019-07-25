import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func-call',
  templateUrl: './func-call.component.html',
  styleUrls: ['./func-call.component.scss']
})
export class FuncCallComponent implements OnInit {
  text1 = 'Text1';
  text2 = 'Text is new';
  changeCase = 'dummy text to change case';

  constructor() { }

  ngOnInit() {
  }

  fun() {
    return 'this string comes by caller string interpolation callee function fun( )';
  }

  changeText() {
    this.text1 = this.text2;
  }
  upper() {
    // tslint:disable-next-line:no-unused-expression
    this.changeCase = this.changeCase.toUpperCase();
  }
  lower() {
    // tslint:disable-next-line:no-unused-expression
    this.changeCase = this.changeCase.toLowerCase();
  }

}
