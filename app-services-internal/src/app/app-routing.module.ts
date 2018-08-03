import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './page-not-found-component/not-found.component'

const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	// { path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			// { enableTracing: true } // <-- debugging purposes only
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
