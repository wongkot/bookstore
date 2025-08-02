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
	private _sortBy = signal<string>('title');
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

	public onSortChange(newSort: string): void {
		if (this._sortBy() == newSort) {
			return;
		}
		
		this._sortBy.set(newSort);
		this._displayBooks.set(this.filterAndSortBooks(this._books));
	}

	public onSearchKeywordChange(newSearchKeyword: string): void {
		if (this._searchKeyword() == newSearchKeyword) {
			return;
		}
		
		this._searchKeyword.set(newSearchKeyword);
		this._displayBooks.set(this.filterAndSortBooks(this._books));
	}

	public onStoreOwnerChange(newStoreOwner: string): void {
		if (this._selectStoreOwner() == newStoreOwner) {
			return;
		}
		
		this._selectStoreOwner.set(newStoreOwner);
		this._displayBooks.set(this.filterAndSortBooks(this._books));
	}

	/**
	 * Load all books from the datasource
	 */
	private loadAllBooks(): void {
		this._isLoading.set(true);
		this._errorMessage.set('');

		this._bookStoreService.getBooksFromAllStore().pipe(
			finalize(() => this._isLoading.set(false)),
		).subscribe({
			next: books => {
				this._books = books;
				this._displayBooks.set(this.filterAndSortBooks(this._books));
			},
			error: (error: string) => {
				this._errorMessage.set(error);
			}
		});
	}

	private filterAndSortBooks(books: Book[]): Book[] {
		return [...books]
		.filter(book => {
			if (this._searchKeyword()) {
				return book.title.includes(this._searchKeyword());
			}
			return true;
		})
		.filter(book => {
			if (this._selectStoreOwner()) {
				return book.storeOwner ? book.storeOwner.includes(this._selectStoreOwner()) : false;
			}
			return true;
		})
		.sort((book1, book2) => {
			switch (this._sortBy()) {
				case 'price':
					return book1.price - book2.price;
				case 'author':
					return book1.author.localeCompare(book2.author);
				case 'title':
				default:
					return book1.title.localeCompare(book2.title);
			}
		});
	}
}
