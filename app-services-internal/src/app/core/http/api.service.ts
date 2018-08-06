import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { Breed } from '@core/http/models/breed';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor() { }

  getBreeds(): Observable<Breed[]> {
    // Mock data to be replaced with the api data.
    const mockBreeds: Breed[] = [
      {
        name: 'Shepherd',
        mappings: [{
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
        mappings: [{
          name: 'rescueGroups',
          value: 'RGPoodle'
        },
        {
          name: 'adoptAPet',
          value: 'ADAPoodle'
        }]
      }
    ];

    return of(mockBreeds);
  }

  updateBreed(breed: Breed) {
    console.log('Updated breed: ' + JSON.stringify(breed));
  }
}

