import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-search-bar',
	standalone: false,
	templateUrl: './search-bar.html',
	styleUrl: './search-bar.sass'
})
export class SearchBar {
	textChanged = output<string>();
	public searchForm: FormGroup;

	constructor(public fb: FormBuilder) {
		this.searchForm = this.fb.group({
			searchText: '',
		});
	}

	public onSubmit(): void {
		this.textChanged.emit(this.searchForm.get('searchText')?.value);
	}
}
