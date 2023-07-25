function converterTemperatura() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitSpan = document.getElementById('fahrenheit');
    const kelvinSpan = document.getElementById('kelvin');
  
    const celsius = parseFloat(celsiusInput.value);
  
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9/5) + 32;
      const kelvin = celsius + 273.15;
  
      fahrenheitSpan.textContent = fahrenheit.toFixed(2) + " °F";
      kelvinSpan.textContent = kelvin.toFixed(2) + " K";
    } else {
      fahrenheitSpan.textContent = "";
      kelvinSpan.textContent = "";
      alert("Por favor, insira um valor numérico válido para a temperatura.");
    }
  }
  