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
  public food: Food;
  public title: String = "Comidas";
  public selectedFoods: Food[];
  fakefood: Food[] = [
    {id:1,name: "Comida1",available:true},
    {id:2,name: "Comida2",available:false},
    {id:3,name: "Comida3",available:true},
    {id:4,name: "Comida4",available:true},
    {id:5,name: "Comida5",available:false},
    {id:6,name: "Comida6",available:true},
    {id:7,name: "Comida7",available:false},
    {id:8,name: "Comida8",available:true},
    {id:9,name: "Comida9",available:true},
    {id:10,name: "Comida10",available:true},
    {id:11,name: "Comida11",available:false},
    {id:12,name: "Comida12",available:true}
  ]
  constructor(foodService: FoodService) {
    this._foodService = foodService;
  }

  ngOnInit(): void {
    this.showFoodList();
  }

  showFoodList(): void {
    this.foods = this.fakefood;
    this._foodService.getAll().subscribe((foods) => {
      console.log(foods);
      this.foods = this.fakefood;
    })
  }

}
