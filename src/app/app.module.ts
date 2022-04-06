import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FoodListComponent } from './content/food-list/food-list.component';
import { TodayComponent } from './content/today/today.component';
import { ChartsComponent } from './content/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    FoodListComponent,
    TodayComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
