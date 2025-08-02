import { AfterViewInit, Component, Input, output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-store-owner-selection',
	standalone: false,
	templateUrl: './store-owner-selection.html',
	styleUrl: './store-owner-selection.sass'
})
export class StoreOwnerSelection implements AfterViewInit {
	@Input() initialValue: string = '';
	ownerChanged = output<string>();
	public ownerSelectionForm: FormGroup;

	constructor(public fb: FormBuilder) {
		this.ownerSelectionForm = this.fb.group({
			owner: '',
		});
	}

	ngAfterViewInit(): void {
		if (this.initialValue) {
			this.ownerSelectionForm.get('owner')?.setValue(this.initialValue);
		}
	}

	public onOwnerChange() {
		this.ownerChanged.emit(this.ownerSelectionForm.get('owner')?.value);
	}
}
