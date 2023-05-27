import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather-service.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather forecast', () => {
    const mockWeatherData = {
      DailyForecasts: [{
        "Date":	"2023-05-27T07:00:00+05:30",
        "Temperature": {
          "Minimum": { "Value": 78}
        }
      }]
    };
    service.getWeatherForecast().subscribe();
    const url = `${service.apiUrl}?apikey=${service.apiKey}`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockWeatherData);
  });
});
