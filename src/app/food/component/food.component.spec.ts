import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Food } from '../food';
import { FoodService } from '../services/food.service';

import { FoodComponent } from './food.component';


describe('FoodComponent', () => {
  let component: FoodComponent;
  let fixture: ComponentFixture<FoodComponent>;
  let valueServiceSpy: jasmine.SpyObj<FoodService>;

  beforeEach(async () => {
    var foods: Food[] = [
      { "id": 0, "name": "Arroz", available: false },
      { "id": 1, "name": "Feijão", available: true },
    ];
    valueServiceSpy = jasmine.createSpyObj('FoodService', ['getAll']);
    valueServiceSpy.getAll.and.returnValue(of(foods));
    await TestBed.configureTestingModule({
      declarations: [FoodComponent],
      imports: [HttpClientModule],
      providers: [{ provide: FoodService, useValue: valueServiceSpy }]
    })
      .compileComponents();
  });

  beforeEach(inject([FoodService, HttpClient], () => {
    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showFoodList should call [FoodService]getAll', () => {
    expect(valueServiceSpy.getAll).toHaveBeenCalled();
  });

  it('foods should not be empty', () => {
    expect(component.foods.length).not.toBe(0);
  });
});
