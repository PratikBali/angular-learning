import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoBook() {
    this.router.navigate(['book']);
  }

  gotoParent() {
    this.router.navigate(['parent']);
  }

  gotoTech() {
    this.router.navigate(['child']);
  }

  gotoChild() {
    this.router.navigate(['tech']);
  }

}
