import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { WeatherData } from '../weather/weather.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public apiKey: string = 'XTRtPwiRp6yhBa59oZUMc44nXpaNbTE7';
  public apiUrl: string = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/204848`;

  constructor(private http: HttpClient) { }

  getWeatherForecast(): Observable<WeatherData[]> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(res => res.DailyForecasts),
      map(data => data.map((item: any) => ({
        date: item.Date,
        description: item.Day.IconPhrase,
        max: item.Temperature.Maximum.Value,
        min: item.Temperature.Minimum.Value,
        })
      ))
    );
  }
}
