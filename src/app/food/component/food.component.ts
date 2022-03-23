import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  private readonly _foodService: FoodService;
  public foods: Food[] = [];

  constructor(foodService: FoodService) {
    this._foodService = foodService;
  }

  ngOnInit(): void {
    this.showFoodList();
  }

  showFoodList(): void {
    this._foodService.getAll().subscribe((foods) => {
      console.log(foods);
      this.foods = foods;
    })
  }

}
