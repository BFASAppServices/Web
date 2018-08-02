import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@modules/home/pages/home/home.component';
import { NotFoundComponent } from '@modules/home/pages/not-found/not-found.component'

const homeRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'not-found', component: NotFoundComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(homeRoutes)
	],
	exports: [
		RouterModule
	]
})
export class HomeRoutingModule { }
