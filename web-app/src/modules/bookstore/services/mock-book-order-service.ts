import { Injectable } from '@angular/core';
import { BookOrder } from '@app/modules/bookstore/models/book-order';
import { CreateBookOrder } from '@app/modules/bookstore/models/create-book-order';
import { BookOrderService } from '@app/modules/bookstore/services/book-order-service';
import { delay, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MockBookOrderService implements BookOrderService {
    getAllBookOrders(): Observable<BookOrder[]> {
        return of([]).pipe(delay(500));
    }

    createBookOrder(createOrder: CreateBookOrder): Observable<BookOrder> {
        let newBookOrder: BookOrder = {
            orderNo: "BO-" + Date.now().toString(),
            title: createOrder.title,
            price: createOrder.price,
            store: createOrder.store,
        }

        return of(newBookOrder);
    }

    removeAllBookOrders(): Observable<string> {
        return of('All book order has been removed.');
    }
}
