import { KeyValue } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BookstoreStateService } from '@app/modules/bookstore/services/bookstore-state-service';

@Component({
	selector: 'app-bookstore',
	standalone: false,
	templateUrl: './bookstore.html',
	styleUrl: './bookstore.sass'
})
export class Bookstore {
	public bookstoreStateService: BookstoreStateService;
	public sortOptions: KeyValue<string, string>[] = [
		{ key: 'title', value: 'Title' },
		{ key: 'price', value: 'Price' },
		{ key: 'author', value: 'Author' },
	];

	constructor() {
		this.bookstoreStateService = inject(BookstoreStateService);
	}

	onSortChanged(value: string) {
		this.bookstoreStateService.onSortChange(value);
	}

	onSearchChanged(value: string) {
		this.bookstoreStateService.onSearchKeywordChange(value);
	}
}
