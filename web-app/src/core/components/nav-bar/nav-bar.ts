import { Component, inject } from '@angular/core';
import { BookOrderStateService } from '@app/modules/bookstore/services/book-order-state-service';

@Component({
	selector: 'app-nav-bar',
	standalone: false,
	templateUrl: './nav-bar.html',
	styleUrl: './nav-bar.sass'
})
export class NavBar {
	public bookOrderStateService: BookOrderStateService;

	constructor() {
		this.bookOrderStateService = inject(BookOrderStateService);
	}
}
