import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './content/charts/charts.component';
import { FoodListComponent } from './content/food-list/food-list.component';
import { TodayComponent } from './content/today/today.component';


const routes: Routes = [
  { path: 'charts', component:ChartsComponent},
  { path: 'food-list', component:FoodListComponent },
{ path: 'today', component:TodayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
