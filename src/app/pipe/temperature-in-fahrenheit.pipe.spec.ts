import { FahrenheitToCelsiusPipe } from './temperature-in-fahrenheit.pipe';

describe('FahrenheitToCelsiusPipe', () => {
  let pipe: FahrenheitToCelsiusPipe;

  beforeEach(() => {
    pipe = new FahrenheitToCelsiusPipe();
  });

  it('should transform Fahrenheit to Celsius', () => {
    const fahrenheitValue = 32;
    const celsiusValue = pipe.transform(fahrenheitValue);

    expect(celsiusValue).toBe(0);
  });

  it('should round Celsius value to two decimal places', () => {
    const fahrenheitValue = 68;
    const celsiusValue = pipe.transform(fahrenheitValue);

    expect(celsiusValue).toBe(20);
  });

  it('should handle negative Fahrenheit values', () => {
    const fahrenheitValue = -4;
    const celsiusValue = pipe.transform(fahrenheitValue);

    expect(celsiusValue).toBe(-20);
  });
});
