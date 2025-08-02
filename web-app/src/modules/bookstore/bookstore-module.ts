import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BookItem } from '@app/modules/bookstore/components/book-item/book-item';
import { BookList } from '@app/modules/bookstore/components/book-list/book-list';
import { StoreOwnerSelection } from '@app/modules/bookstore/components/store-owner-selection/store-owner-selection';
import { Bookstore } from '@app/modules/bookstore/pages/bookstore/bookstore';
import { SharedModule } from '@app/shared/shared-module';

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
