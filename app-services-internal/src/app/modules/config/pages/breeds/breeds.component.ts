import { Component, OnInit } from '@angular/core';
import { ListWithEditItem } from '@modules/config/components/list-with-edit/list-with-edit.component';

@Component({
	selector: 'page-breeds',
	templateUrl: './breeds.component.html',
	styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit {

	breedList: ListWithEditItem[];

	constructor() { }

	ngOnInit() {
		// TODO: get this info from an api service
		this.breedList = [
			{
				name: 'Shepherd',
				values: [{
					name: 'rescueGroups',
					value: 'RGShepherd'
				},
				{
					name: 'adoptAPet',
					value: 'ADAShepherd'
				}]
			},
			{
				name: 'Poodle',
				values: [{
					name: 'rescueGroups',
					value: 'RGPoodle'
				},
				{
					name: 'adoptAPet',
					value: 'ADAPoodle'
				}]
			}
		];

	}

}
