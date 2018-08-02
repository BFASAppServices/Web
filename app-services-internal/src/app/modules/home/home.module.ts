import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from '@modules/home/home-routing.module';

import { HomeComponent } from '@modules/home/pages/home/home.component';
import { NotFoundComponent } from '@modules/home/pages/not-found/not-found.component'

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule
	],
	declarations: [
		HomeComponent,
		NotFoundComponent
	],
	exports: [
		HomeComponent,
		NotFoundComponent
	]
})
export class HomeModule { }
