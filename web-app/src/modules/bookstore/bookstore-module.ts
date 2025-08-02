import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bookstore } from '@app/modules/bookstore/pages/bookstore/bookstore';

const ROUTES: Routes = [
	{ path: '', pathMatch: 'full', component: Bookstore },
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
