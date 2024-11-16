class TemperatureConverter {

    fahrenheitToCelsius(fahrenheit) {
		  return (fahrenheit - 32) * 5.0 / 9.0;
	  }

    fahrenheitToKelvin(fahrenheit) {
		  return this.celsiusToKelvin(this.fahrenheitToCelsius(fahrenheit));
	  }

    celsiusToFahrenheit(celsius) {
		  return celsius * 9.0 / 5.0 + 32.0;
	  }

    celsiusToKelvin(celsius) {
		  return celsius + 273.15;
	  }

    kelvinToCelsius(kelvin) {
		  return kelvin - 273.15;
	  }

    kelvinToFahrenheit(kelvin) {
		  return this.celsiusToFahrenheit(this.kelvinToCelsius(kelvin));
	  }
}

module.exports = TemperatureConverter;