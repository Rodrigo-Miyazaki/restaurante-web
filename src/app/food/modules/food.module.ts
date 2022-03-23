import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from '../component/food.component';



@NgModule({
  declarations: [
    FoodComponent,
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ],
  exports: [
    FoodComponent
  ]
})
export class FoodModule { }
