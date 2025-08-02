import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bookstore } from '@app/modules/bookstore/pages/bookstore/bookstore';
import { BookList } from './components/book-list/book-list';
import { BookItem } from './components/book-item/book-item';
import { SharedModule } from 'shared/shared-module';
import { StoreOwnerSelection } from './components/store-owner-selection/store-owner-selection';
import { ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
	{ path: '', pathMatch: 'full', component: Bookstore },
];

@NgModule({
	declarations: [
		Bookstore,
  		BookList,
    	BookItem,
     	StoreOwnerSelection,
	],
	imports: [
		RouterModule.forChild(ROUTES),
		CommonModule,
		SharedModule,
		ReactiveFormsModule,
	]
})
export class BookstoreModule { }
