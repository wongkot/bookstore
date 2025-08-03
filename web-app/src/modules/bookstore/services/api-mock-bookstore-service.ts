import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '@app/modules/bookstore/models/book';
import { BookstoreService } from '@app/modules/bookstore/services/bookstore-service';
import { environment } from 'environments/environment';
import { combineLatest, map, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiMockBookstoreService implements BookstoreService {
    private readonly URL_PREFIX = 'v1/bookstore';

    constructor(private http: HttpClient) { }

	getBooksFromPeterStore(): Observable<Book[]> {
		return this.http.get<Book[]>(`${environment.baseApiUrl}${this.URL_PREFIX}/peter`).pipe(
			map(books => {
				books.forEach(b => b.storeOwner = 'Peter');
				return books;
			}),
		);
	}

	getBooksFromGretaStore(): Observable<Book[]> {
		return this.http.get<Book[]>(`${environment.baseApiUrl}${this.URL_PREFIX}/greta`).pipe(
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
