import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes for this area.
import { ConfigRoutingModule } from '@modules/config/config-routing.module';

// To use the material components.
import { CoreMaterialModule } from '@core/core-material.module'

// Area components.
import { ConfigComponent } from './pages/config/config.component';
import { BreedsComponent } from './pages/breeds/breeds.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { ListWithEditComponent, ListWithItemValuesDialog } from './components/list-with-edit/list-with-edit.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ConfigRoutingModule,
		CoreMaterialModule
	],
	declarations: [
		ConfigComponent,
		BreedsComponent,
		ColorsComponent,
		ListWithEditComponent,
		ListWithItemValuesDialog,
	],
	entryComponents: [
		ListWithItemValuesDialog
	],
	exports: [
	]
})
export class ConfigModule { }
