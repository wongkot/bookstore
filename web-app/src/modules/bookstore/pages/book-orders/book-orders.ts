import { Component, inject } from '@angular/core';
import { BookOrderStateService } from '@app/modules/bookstore/services/book-order-state-service';

@Component({
	selector: 'app-book-orders',
	standalone: false,
	templateUrl: './book-orders.html',
	styleUrl: './book-orders.sass'
})
export class BookOrders {
	public bookOrderStateService: BookOrderStateService;

	constructor() {
		this.bookOrderStateService = inject(BookOrderStateService);
	}

	public onRemoveAllOrdersClick(): void {
		this.bookOrderStateService.removeAllOrder();
	}

	onClearErrorMessage() {
		this.bookOrderStateService.clearErrorMessage();
	}
}
