import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from '@app/app';
import { AppRoutingModule } from '@app/app-routing-module';
import { CoreModule } from '@app/core/core-module';
import { BookstoreModule } from '@app/modules/bookstore/bookstore-module';

@NgModule({
	declarations: [
		App
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CoreModule,
		BookstoreModule,
	],
	providers: [
		provideBrowserGlobalErrorListeners()
	],
	bootstrap: [App]
})
export class AppModule { }
