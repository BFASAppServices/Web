import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Routing 
import { AppRoutingModule } from './app-routing.module';

// Core module for any shared items across all other modules, also includes Angular material module.
import { CoreModule } from '@core/core.module';
import { CoreMaterialModule } from '@core/core-material.module';

// Each functional area modules.
import { HomeModule } from '@modules/home/home.module';



@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,

		// Routing
		AppRoutingModule,
		
		// Common area module.
		CoreMaterialModule,
		CoreModule,
		
		// Funcional area modules.
		HomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
