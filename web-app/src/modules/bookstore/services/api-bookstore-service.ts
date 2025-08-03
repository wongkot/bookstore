import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '@app/modules/bookstore/models/book';
import { BookstoreService } from '@app/modules/bookstore/services/bookstore-service';
import { environment } from 'environments/environment';
import { combineLatest, map, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiBookstoreService implements BookstoreService {
    constructor(private http: HttpClient) { }

	getBooksFromPeterStore(): Observable<Book[]> {
		return this.http.get<Book[]>(`${environment.baseBookstoreDataApiUrl}peter/books`).pipe(
			map(books => {
				books.forEach(b => b.storeOwner = 'Peter');
				return books;
			}),
		);
	}

	getBooksFromGretaStore(): Observable<Book[]> {
		return this.http.get<Book[]>(`${environment.baseBookstoreDataApiUrl}greta/books`).pipe(
			map(books => {
				books.forEach(b => b.storeOwner = 'Greta');
				return books;
			}),
		);
	}

	getBooksFromAllStore(): Observable<Book[]> {
		const peterStoreBooks$ = this.getBooksFromPeterStore();
		const gretaStoreBooks$ = this.getBooksFromGretaStore();
		return combineLatest([peterStoreBooks$, gretaStoreBooks$]).pipe(
			map(([books1, books2]) => books1.concat(books2)),
		);
	}
}
