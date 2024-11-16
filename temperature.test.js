const TemperatureConverter = require('./temperature');

test('Converter de Fahrenheit para Celsius', () => {
    // Preparar
    let temperatura = 51.3;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.fahrenheitToCelsius(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(10.72, 2); // Precisão de 2 casas decimais
});

// TODO: Fazer outros casos de teste que testem adequadamente a classe TemperatureConverter

// Fahrenheit para Celsius:

test('Converter de Fahrenheit para Celsius', () => {
    // Preparar
    let temperatura = 70;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.fahrenheitToCelsius(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(21.11, 2); // Precisão de 2 casas decimais
});

// Fahrenheit para Kelvin

test('Converter de Fahrenheit para Kelvin', () => {
    // Preparar
    let temperatura = 35;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.fahrenheitToKelvin(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(274.82, 2); // Precisão de 2 casas decimais
});

// Celcius para Fahrenheit

test('Converter de Celcius para Fahrenheit', () => {
    // Preparar
    let temperatura = 22.5;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.celsiusToFahrenheit(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(72.5, 2); // Precisão de 2 casas decimais
});

// Celcius para Kelvin

test('Converter de Celcius para Kelvin', () => {
    // Preparar
    let temperatura = -15;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.celsiusToKelvin(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(258.15, 2); // Precisão de 2 casas decimais
});

// Kelvin para Celcius

test('Converter de Kelvin para Celcius', () => {
    // Preparar
    let temperatura = 120;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.kelvinToCelsius(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(-153.15, 2); // Precisão de 2 casas decimais
});

// Kelvin para Fahrenheit

test('Converter de Kelvin para Fahrenheit', () => {
    // Preparar
    let temperatura = 60;
    let converter = new TemperatureConverter();

    // Executar
    let resultado = converter.kelvinToFahrenheit(temperatura);

    // Verificar
    expect(resultado).toBeCloseTo(-351.67, 2); // Precisão de 2 casas decimais
});