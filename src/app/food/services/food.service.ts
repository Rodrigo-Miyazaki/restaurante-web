import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../food';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Food[]> {
    return this.http.get<any[]>(`${ environment.apiUrl }/api/food`);
  }

  getById(id:Number): Observable<Food> {
    return this.http.get<any>(`${ environment.apiUrl }/api/food/${id}`);
  }
}
