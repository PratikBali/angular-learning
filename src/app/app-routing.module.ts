import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { TechnologyComponent } from './asgn/a9/technology/technology.component';
import { BooksComponent } from './asgn/a9/books/books.component';
import { NewparentComponent } from './asgn/a8/newparent/newparent.component';
import { NewchildComponent } from './asgn/a8/newchild/newchild.component';
import { HomeComponent } from './asgn/a9/home/home.component';
import { ParentComponent } from './asgn/a8/parent/parent.component';
import { ChildComponent } from './asgn/a8/child/child.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tech', component: TechnologyComponent },
  { path: 'book', component: BooksComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
