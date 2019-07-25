import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<h1 class="myclass"> hi this is text from inline html and red color from inline css</h1>`,
  styles: [`.myclass { color: red}`]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
