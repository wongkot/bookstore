import { inject, Injectable, signal } from '@angular/core';
import { Book } from '@app/modules/bookstore/models/book';
import { BookstoreService } from '@app/modules/bookstore/services/bookstore-service';
import { MockBookstoreService } from '@app/modules/bookstore/services/mock-bookstore-service';
import { finalize } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BookstoreStateService {
	private _isLoading = signal<boolean>(false);
	private _displayBooks = signal<Book[]>([]);
	private _errorMessage = signal<string>('');
	private _sortBy = signal<string>('');
	private _searchKeyword = signal<string>('');
	private _selectStoreOwner = signal<string>('');

	private _bookStoreService: BookstoreService;

	private _books: Book[] = [];

	constructor() {
		this._bookStoreService = inject(MockBookstoreService);
		this.loadAllBooks();
	}

	public get isLoading() {
		return this._isLoading.asReadonly();
	}

	public get displayBooks() {
		return this._displayBooks.asReadonly();
	}

	/**
	 * Load all books from the datasource
	 */
	private loadAllBooks() {
		this._isLoading.set(true);
		this._errorMessage.set('');

		this._bookStoreService.getBooksFromAllStore().pipe(
			finalize(() => this._isLoading.set(false)),
		).subscribe({
			next: books => {
				this._books = books;
				this._displayBooks.set(books);
			},
			error: (error: string) => {
				this._errorMessage.set(error);
			}
		});
	}
}
