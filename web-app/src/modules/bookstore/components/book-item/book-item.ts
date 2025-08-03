import { Component, inject, Input } from '@angular/core';
import { CreateBookOrder } from '@app/modules/bookstore/models/create-book-order';
import { BookOrderStateService } from '@app/modules/bookstore/services/book-order-state-service';

@Component({
	selector: 'app-book-item',
	standalone: false,
	templateUrl: './book-item.html',
	styleUrl: './book-item.sass'
})
export class BookItem {
	@Input() title?: string;
	@Input() author?: string;
	@Input() price?: number;
	@Input() storeOwner?: string;

	private _bookOrderStateService: BookOrderStateService;

	constructor() {
		this._bookOrderStateService = inject(BookOrderStateService);
	}

	public styleStoreColor(): string {
		let styleClasses = [
			'badge',
		];

		switch (this.storeOwner) {
			case 'Peter':
				styleClasses.push('bg-success');
				break;
			case 'Greta':
				styleClasses.push('bg-info');
				break;
		}

		return styleClasses.join(' ');
	}

	public onBuyClick() {
		let createBookOrder: CreateBookOrder = {
			title: this.title!,
			price: this.price!,
			store: this.storeOwner!,
		};
		this._bookOrderStateService.createOrder(createBookOrder);
	}
}
