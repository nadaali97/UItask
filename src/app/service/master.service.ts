import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { responseModel } from './responseModel.model';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getData(): Observable<responseModel | null> {
    return this.http.get<responseModel>(
      `https://jsonplaceholder.typicode.com/photos`
    );
  }
}
