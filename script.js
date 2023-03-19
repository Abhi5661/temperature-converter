const celsiusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function CalculateTemp() {
  console.log(event.target.value);
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      kelvinEl.value = (currentValue + 273).toFixed(2);
      break;
    case "fahrenheit":
      celsius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273).toFixed(2);
      break;
    case "kelvin":
      celsius.value = (currentValue - 273).toFixed(2);
      fahrenheit.value = ((currentValue - 273) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
