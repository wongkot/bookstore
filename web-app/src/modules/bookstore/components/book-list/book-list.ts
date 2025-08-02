import { Component, inject } from '@angular/core';
import { BookstoreStateService } from '@app/modules/bookstore/services/bookstore-state-service';

@Component({
	selector: 'app-book-list',
	standalone: false,
	templateUrl: './book-list.html',
	styleUrl: './book-list.sass'
})
export class BookList {
	public bookstoreStateService: BookstoreStateService;
	constructor() {
		this.bookstoreStateService = inject(BookstoreStateService);
	}
}
