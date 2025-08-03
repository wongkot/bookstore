import { Observable } from "rxjs";
import { BookOrder } from "@app/modules/bookstore/models/book-order";
import { CreateBookOrder } from "@app/modules/bookstore/models/create-book-order";

export interface BookOrderService {
    getAllBookOrders(): Observable<BookOrder[]>;
    createBookOrder(createOrder: CreateBookOrder): Observable<BookOrder>;
}
