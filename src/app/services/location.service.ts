import { Injectable } from '@angular/core';
import { Location } from '../model/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locations : Location[] = [
   
  ];

  constructor() { }
}
