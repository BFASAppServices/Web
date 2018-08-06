import { Component, OnInit } from '@angular/core';

import { ListWithEditItem } from '@modules/config/components/list-with-edit/list-with-edit.component';
import { ApiService } from '@core/http/api.service';
import { Breed } from '@core/http/models/breed';


@Component({
	selector: 'page-breeds',
	templateUrl: './breeds.component.html',
	styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

	breedList: ListWithEditItem[];

	constructor(
		private apiService: ApiService
	) { 
		this.breedList = [];
	}

	ngOnInit() {
		this.apiService.getBreeds()
			.subscribe(breeds => {
				for (let index = 0; index < breeds.length; index++) {
					const element = breeds[index];
					this.breedList.push({
						name: element.name,
						values: element.mappings
					});
				}
			});
	}

	onBreedEdited(breed: ListWithEditItem) {
		// Massage the data to fit the model from the ui.
		const b: Breed  = {
			name: breed.name,
			mappings: breed.values
		};
		this.apiService.updateBreed(b);
	}

}
