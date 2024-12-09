function convertTemperature() {
    let tempInput = document.getElementById("tempInput").value;
    let unit = document.getElementById("unitSelect").value;
    let resultText = "";

    // Validate if the input is a number
    if (isNaN(tempInput) || tempInput === "") {
        resultText = "Please enter a valid number!";
        document.getElementById("result").innerText = resultText;
        return;
    }

    tempInput = parseFloat(tempInput);

    // Conversion logic
    if (unit === "celsius") {
        let fahrenheit = (tempInput * 9/5) + 32;
        let kelvin = tempInput + 273.15;
        resultText = `${tempInput}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)} K`;
    } else if (unit === "fahrenheit") {
        let celsius = (tempInput - 32) * 5/9;
        let kelvin = celsius + 273.15;
        resultText = `${tempInput}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)} K`;
    } else if (unit === "kelvin") {
        let celsius = tempInput - 273.15;
        let fahrenheit = (celsius * 9/5) + 32;
        resultText = `${tempInput} K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    // Display the result
    document.getElementById("result").innerText = resultText;
}
