import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {

  name1 = 'This is from String interpolation ';
  concat = 'and this is from concat string';

  constructor() { }

  ngOnInit() {
    this.name1 = this.name1 + this.concat;
  }

}
