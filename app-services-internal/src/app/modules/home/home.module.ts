import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '@modules/home/home-routing.module';

import { HomeComponent } from '@modules/home/pages/home/home.component';


@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule
	],
	declarations: [
		HomeComponent,
	],
	exports: [
		HomeComponent,
	]
})
export class HomeModule { }
