import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBar } from './components/search-bar/search-bar';
import { SortSelection } from './components/sort-selection/sort-selection';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
