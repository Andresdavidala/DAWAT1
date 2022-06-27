import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowModelService {

  constructor() { }

  $modal = new EventEmitter<any>();
}
