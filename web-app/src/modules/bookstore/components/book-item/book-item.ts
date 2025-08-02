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

	public styleStoreColor(): string {
		let styleClasses = [
			'bi',
			'bi-book-fill',
		];

		switch (this.storeOwner) {
			case 'Peter':
				styleClasses.push('text-success');
				break;
			case 'Greta':
				styleClasses.push('text-info');
				break;
		}

		return styleClasses.join(' ');
	}
}
