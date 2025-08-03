import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BookItem } from '@app/modules/bookstore/components/book-item/book-item';
import { BookList } from '@app/modules/bookstore/components/book-list/book-list';
import { StoreOwnerSelection } from '@app/modules/bookstore/components/store-owner-selection/store-owner-selection';
import { BookOrders } from '@app/modules/bookstore/pages/book-orders/book-orders';
import { Bookstore } from '@app/modules/bookstore/pages/bookstore/bookstore';
import { SharedModule } from '@app/shared/shared-module';

const ROUTES: Routes = [
	{ path: '', pathMatch: 'full', component: Bookstore },
	{ path: 'orders', component: BookOrders },
];

@NgModule({
	declarations: [
		Bookstore,
  		BookList,
    	BookItem,
     	StoreOwnerSelection,
		BookOrders,
	],
	imports: [
		RouterModule.forChild(ROUTES),
		CommonModule,
		SharedModule,
		ReactiveFormsModule,
	],
	providers: [
		provideHttpClient(),
	]
})
export class BookstoreModule { }
