import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from '../component/food.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    FoodComponent,
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule
  ],
  exports: [
    FoodComponent
  ]
})
export class FoodModule { }
