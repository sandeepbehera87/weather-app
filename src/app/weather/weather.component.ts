import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../api/weather-service.service';
import { Observable, map, of } from 'rxjs';
import * as moment from 'moment';

export interface WeatherData {
  date: string;
  description: string;
  max: number;
  min: number;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData$: Observable<WeatherData[]> = of([]);
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherForecast().pipe(
      map(weatherData => weatherData.map((item: WeatherData) =>
      ({ ...item, date: moment(item.date, moment.ISO_8601).format("dddd, MMMM DD") })))
    ).subscribe(
      (weatherData) => {
        this.weatherData$ = of(weatherData);
      }
    );
  }
}
