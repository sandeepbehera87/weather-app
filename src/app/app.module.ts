import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherService } from './api/weather-service.service';
import { WeatherComponent } from './weather/weather.component';
import { FahrenheitToCelsiusPipe } from './pipe/temperature-in-fahrenheit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    FahrenheitToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
