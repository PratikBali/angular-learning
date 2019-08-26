import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './asgn/a4/demo/demo.component';
import { FirstCompComponent } from './asgn/a5/first-comp/first-comp.component';
import { SecondCompComponent } from './asgn/a5/second-comp/second-comp.component';
import { TextfieldComponent } from './asgn/a6/textfield/textfield.component';
import { InlineComponent } from './asgn/a6/inline/inline.component';
import { CssComponent } from './asgn/a7/css/css.component';
import { Css2Component } from './asgn/a7/css2/css2.component';
import { FuncCallComponent } from './asgn/a7/func-call/func-call.component';
import { ChildComponent } from './asgn/a8/child/child.component';
import { ParentComponent } from './asgn/a8/parent/parent.component';
import { NewchildComponent } from './asgn/a8/newchild/newchild.component';
import { NewparentComponent } from './asgn/a8/newparent/newparent.component';
import { TechnologyComponent } from './asgn/a9/technology/technology.component';
import { BooksComponent } from './asgn/a9/books/books.component';
import { HomeComponent } from './asgn/a9/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FirstCompComponent,
    SecondCompComponent,
    TextfieldComponent,
    InlineComponent,
    CssComponent,
    Css2Component,
    FuncCallComponent,
    ChildComponent,
    ParentComponent,
    NewchildComponent,
    NewparentComponent,
    TechnologyComponent,
    BooksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
