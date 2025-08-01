import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bookstore } from './pages/bookstore/bookstore';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: Bookstore  },
];

@NgModule({
  declarations: [
    Bookstore
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class BookstoreModule { }
