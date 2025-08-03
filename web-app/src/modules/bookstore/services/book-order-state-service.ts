import { inject, Injectable, signal } from '@angular/core';
import { BookOrder } from '@app/modules/bookstore/models/book-order';
import { CreateBookOrder } from '@app/modules/bookstore/models/create-book-order';
import { ApiBookOrderService } from '@app/modules/bookstore/services/api-book-order-service';
import { BookOrderService } from '@app/modules/bookstore/services/book-order-service';
import { finalize } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BookOrderStateService {
	private _isLoading = signal<boolean>(false);
	private _bookOrders = signal<BookOrder[]>([]);
	private _totalPrice = signal<number>(0);
	private _errorMessage = signal<string>('');

	private _bookOrderService: BookOrderService;

	constructor() {
		this._bookOrderService = inject(ApiBookOrderService);
		this.loadAllBookOrders();
	}

	public get isLoading() {
		return this._isLoading.asReadonly();
	}

	public get bookOrders() {
		return this._bookOrders;
	}

	public get totalPrice() {
		return this._totalPrice;
	}

    public createOrder(createOrder: CreateBookOrder) {
		this._isLoading.set(true);
		this._errorMessage.set('');
        this._bookOrderService.createBookOrder(createOrder).pipe(
			finalize(() => this._isLoading.set(false)),
		).subscribe({
			next: newBookOrder => {
				this._bookOrders.update((orders) => [...orders, newBookOrder]);
				this._totalPrice.update((totalPrice) => totalPrice + newBookOrder.price);
			},
			error: (error: string) => {
				this._errorMessage.set(error);
			}
		});
    }

	public removeAllOrder() {
		this._isLoading.set(true);
		this._errorMessage.set('');

        this._bookOrderService.removeAllBookOrders().pipe(
			finalize(() => this._isLoading.set(false)),
		).subscribe({
			next: () => {
				this._bookOrders.set([]);
				this._totalPrice.set(0);
			},
			error: (error: string) => {
				this._errorMessage.set(error);
			}
		});
	}

    private loadAllBookOrders(): void {
		this._isLoading.set(true);
		this._errorMessage.set('');

		this._bookOrderService.getAllBookOrders().pipe(
			finalize(() => this._isLoading.set(false)),
		).subscribe({
			next: bookOrders => {
				this._bookOrders.set(bookOrders);

				let totalPrice = 0;
				bookOrders.forEach((order) => {
					totalPrice += order.price;
				})
				this._totalPrice.set(totalPrice);
			},
			error: (error: string) => {
				this._errorMessage.set(error);
			}
		});
	}
}
