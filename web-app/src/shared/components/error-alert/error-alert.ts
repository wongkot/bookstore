import { Component, Input, output } from '@angular/core';

@Component({
	selector: 'app-error-alert',
	standalone: false,
	templateUrl: './error-alert.html',
	styleUrl: './error-alert.sass'
})
export class ErrorAlert {
	@Input() message: string = '';
	dismiss = output();

	public onDismissClick(): void {
		this.dismiss.emit();
	}
}
