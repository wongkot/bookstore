import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookOrder } from '@app/modules/bookstore/models/book-order';
import { CreateBookOrder } from '@app/modules/bookstore/models/create-book-order';
import { BookOrderService } from '@app/modules/bookstore/services/book-order-service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiBookOrderService implements BookOrderService {
    private readonly URL_PREFIX = 'v1/book-orders';

    constructor(private http: HttpClient) { }

    getAllBookOrders(): Observable<BookOrder[]> {
        return this.http.get<BookOrder[]>(`${environment.baseApiUrl}${this.URL_PREFIX}`);
    }

    createBookOrder(createOrder: CreateBookOrder): Observable<BookOrder> {
        return this.http.post<BookOrder>(`${environment.baseApiUrl}${this.URL_PREFIX}`, createOrder);
    }

    removeAllBookOrders(): Observable<string> {
        return this.http.delete(`${environment.baseApiUrl}${this.URL_PREFIX}/all`, {
            responseType: 'text',
        });
    }
}
