import { Component, inject } from '@angular/core';
import { BookstoreService } from '@app/modules/bookstore/services/bookstore-service';
import { BookstoreStateService } from '@app/modules/bookstore/services/bookstore-state-service';
import { MockBookstoreService } from '@app/modules/bookstore/services/mock-bookstore-service';

@Component({
	selector: 'app-bookstore',
	standalone: false,
	templateUrl: './bookstore.html',
	styleUrl: './bookstore.sass'
})
export class Bookstore {
	public bookstoreStateService: BookstoreStateService;
	constructor() {
		this.bookstoreStateService = inject(BookstoreStateService);
	}
}
