import { Injectable } from '@angular/core';
import { Book } from '@app/modules/bookstore/models/book';
import { BookstoreService } from '@app/modules/bookstore/services/bookstore-service';
import { combineLatest, map, Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MockBookstoreService implements BookstoreService {
	getBooksFromPeterStore(): Observable<Book[]> {
		const books: Book[] = [
			{
				id: "1",
				title: "Fluent Python: Clear, Concise, and Effective Programming",
				author: "Luciano Ramalho",
				publishedOn: "2024-03-06T09:57:50.587Z",
				price: 100
			},
			{
				id: "2",
				title: "The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change",
				author: "Camille Fournier",
				publishedOn: "2024-03-08T09:56:50.587Z",
				price: 150
			},
			{
				id: "3",
				title: "Software Engineering for Absolute Beginners: Your Guide to Creating Software Products",
				author: "Nico Loubser",
				publishedOn: "2024-03-07T09:56:50.587Z",
				price: 200
			},
			{
				id: "4",
				title: "The Staff Engineer's Path: A Guide for Individual Contributors Navigating Growth and Change",
				author: "Tanya Reilly",
				publishedOn: "2024-03-03T09:56:50.587Z",
				price: 150
			},
			{
				id: "5",
				title: "Cracking the PM Interview: How to Land a Product Manager Job in Technology (Cracking the Interview & Career)",
				author: "Gayle Laakmann McDowell",
				publishedOn: "2024-03-02T08:56:50.587Z",
				price: 180
			}
		];
		return of<Book[]>(books).pipe(
			map(books => {
				books.forEach(b => b.storeOwner = 'Peter');
				return books;
			}),
		);
	}

	getBooksFromGretaStore(): Observable<Book[]> {
		const books: Book[] = [
			{
				id: "1",
				title: "The Nature of Software Development: Keep It Simple, Make It Valuable, Build It Piece by Piece",
				author: "Ron Jeffries",
				publishedOn: "2024-03-06T09:56:50.587Z",
				price: 200
			},
			{
				id: "2",
				title: "Modern Software Engineering: Doing What Works to Build Better Software Faster",
				author: "David Farley, Amy Gordon, et al.",
				publishedOn: "2024-03-05T09:56:50.587Z",
				price: 100
			},
			{
				id: "3",
				title: "Software Engineering for Absolute Beginners: Your Guide to Creating Software Products",
				author: "Nico Loubser",
				publishedOn: "2024-03-07T09:56:50.587Z",
				price: 300
			},
			{
				id: "4",
				title: "Code: The Hidden Language of Computer Hardware and Software",
				author: "Charles Petzold",
				publishedOn: "2024-03-04T09:56:50.587Z",
				price: 150
			},
			{
				id: "5",
				title: "Software Development Pearls: Lessons from Fifty Years of Software Experience",
				author: "Karl Wiegers, Amy Gordon, et al.",
				publishedOn: "2024-03-04T08:56:50.587Z",
				price: 200
			}
		];
		return of<Book[]>(books).pipe(
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
