import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBar } from '@app/shared/components/search-bar/search-bar';
import { SortSelection } from '@app/shared/components/sort-selection/sort-selection';

@NgModule({
	declarations: [
		SearchBar,
		SortSelection,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	exports: [
		SearchBar,
		SortSelection,
	]
})
export class SharedModule { }
