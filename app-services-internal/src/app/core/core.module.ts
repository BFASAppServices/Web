import { NgModule } from '@angular/core';
import { HeaderComponent } from '@core/header/header/header.component';
import { FooterComponent } from '@core/footer/footer/footer.component';

import { CoreMaterialModule } from '@core/core-material.module'

@NgModule({
	imports: [
		CoreMaterialModule,
	],
	exports: [
		HeaderComponent,
		FooterComponent
	],
	declarations: [
		HeaderComponent,
		FooterComponent
	]
})
export class CoreModule { }