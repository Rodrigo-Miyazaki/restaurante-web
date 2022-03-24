import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Food } from '../food';

import { FoodService } from './food.service';

describe('FoodService', () => {
  let service: FoodService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
 
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'get']);
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    service = new FoodService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll should return all foods (HttpClient called once)', (done: DoneFn) => {
    const expectedFood: Food[] =
      [{ id: 1, name: 'A', available: true }, { id: 2, name: 'B', available: false }];
  
    httpClientSpy.get.and.returnValue(of(expectedFood));
  
    service.getAll().subscribe({
      next: foods => {
        expect(foods)
          .withContext('expected foods')
          .toEqual(expectedFood);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('getById should return food by id (HttpClient called once)', (done: DoneFn) => {
    const foodId = 1;
    const expectedFood: Food = { id: foodId, name: 'A', available: false };
    
    httpClientSpy.get.and.returnValue(of(expectedFood));
  
    service.getById(foodId).subscribe({
      next: food => {
        expect(food)
          .withContext('expected food')
          .toEqual(expectedFood);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
