import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core-module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
