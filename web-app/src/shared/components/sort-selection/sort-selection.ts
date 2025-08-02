import { KeyValue } from '@angular/common';
import { AfterViewInit, Component, Input, output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-sort-selection',
	standalone: false,
	templateUrl: './sort-selection.html',
	styleUrl: './sort-selection.sass'
})
export class SortSelection implements AfterViewInit {
	@Input() options!: KeyValue<string, string>[];

	selectionChanged = output<string>();
	public selectionForm: FormGroup;

	constructor(public fb: FormBuilder) {
		this.selectionForm = this.fb.group({
			prop: { value: 'title' },
		});
	}
	
	ngAfterViewInit(): void {
		// Set dropdown value to first item by default
		if (this.options?.length > 0) {
			this.selectionForm.get('prop')?.setValue(this.options[0].key);
		}
	}

	public onSelectionChanged(): void {
		this.selectionChanged.emit(this.selectionForm.get('prop')?.value);
	}
}
