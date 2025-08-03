import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBar } from '@app/shared/components/search-bar/search-bar';
import { SortSelection } from '@app/shared/components/sort-selection/sort-selection';
import { ErrorAlert } from './components/error-alert/error-alert';

@NgModule({
	declarations: [
		SearchBar,
		SortSelection,
		ErrorAlert,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	exports: [
		SearchBar,
		SortSelection,
		ErrorAlert,
	]
})
export class SharedModule { }
