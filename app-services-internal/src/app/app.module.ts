import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Routing 
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './page-not-found-component/not-found.component';

// Core module for any shared items across all other modules, also includes Angular material module.
import { CoreModule } from '@core/core.module';

// Each functional area modules.
import { HomeModule } from '@modules/home/home.module';
import { ConfigModule } from '@modules/config/config.module';



@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent
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
		CoreModule,
		
		// Funcional area modules.
		HomeModule,
		ConfigModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
