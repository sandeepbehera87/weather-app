import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherComponent, WeatherData } from './weather.component';
import { of } from 'rxjs';
import { WeatherService } from '../api/weather-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let weatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [WeatherComponent],
      providers: [WeatherService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
    jest.spyOn(weatherService, 'getWeatherForecast').mockReturnValue(of([]));
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch weather data on component initialization', () => {
    const mockWeatherData: WeatherData[] = [{ date: '12/12/1987', description: 'mostly sunny', max: 97, min:75 }];
    jest.spyOn(weatherService, 'getWeatherForecast').mockReturnValue(of(mockWeatherData));

    component.ngOnInit();

    expect(weatherService.getWeatherForecast).toHaveBeenCalled();
    component.weatherData$.subscribe(weatherData => expect(weatherData).toEqual(mockWeatherData));
  });
});
