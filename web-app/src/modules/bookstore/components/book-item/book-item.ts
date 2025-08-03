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
}
