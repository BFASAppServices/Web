import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes for this area.
import { ConfigRoutingModule } from '@modules/config/config-routing.module';

// To use the material components.
import { CoreMaterialModule } from '@core/core-material.module'

// Area components.
import { ConfigComponent } from './pages/config/config.component';
import { BreedsComponent } from './pages/breeds/breeds.component';
import { ColorsComponent } from './pages/colors/colors.component';


@NgModule({
	imports: [
		CommonModule,
		ConfigRoutingModule,
		CoreMaterialModule
	],
	declarations: [
		ConfigComponent,
		BreedsComponent,
		ColorsComponent
	],
	exports: [
	]
})
export class ConfigModule { }
