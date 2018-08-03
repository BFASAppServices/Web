import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigComponent } from '@modules/config/pages/config/config.component';
import { BreedsComponent } from '@modules/config/pages/breeds/breeds.component';
import { ColorsComponent } from '@modules/config/pages/colors/colors.component';


const configRoutes: Routes = [
	{ path: 'config', component: ConfigComponent },
	{ path: 'config/breeds', component: BreedsComponent },
	{ path: 'config/colors', component: ColorsComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(configRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ConfigRoutingModule { }
