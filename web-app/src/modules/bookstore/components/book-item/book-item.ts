import { Component, Input } from '@angular/core';

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
}
