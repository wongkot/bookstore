import { Observable } from "rxjs";
import { Book } from "@app/modules/bookstore/models/book";

export interface BookstoreService {
	getBooksFromPeterStore(): Observable<Book[]>;
	getBooksFromGretaStore(): Observable<Book[]>;
	getBooksFromAllStore(): Observable<Book[]>;
}
