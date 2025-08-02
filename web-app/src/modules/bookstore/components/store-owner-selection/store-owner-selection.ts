import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-store-owner-selection',
	standalone: false,
	templateUrl: './store-owner-selection.html',
	styleUrl: './store-owner-selection.sass'
})
export class StoreOwnerSelection {
	ownerChanged = output<string>();
	public ownerSelectionForm: FormGroup;

	constructor(public fb: FormBuilder) {
		this.ownerSelectionForm = this.fb.group({
			owner: '',
		});
	}

	public onOwnerChange() {
		this.ownerChanged.emit(this.ownerSelectionForm.get('owner')?.value);
	}
}
