function showTab(activeTab, inactiveTab) {
    document.getElementById(activeTab).classList.add('active');
    document.getElementById(inactiveTab).classList.remove('active');
    document.getElementById('inputValue').placeholder = `Enter ${activeTab === 'celsiusTab' ? 'Celsius' : 'Fahrenheit'} temperature`;
    document.getElementById('result').textContent = '';
}

function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        alert('Invalid input. Please enter a valid number.');
        return;
    }

    const activeTab = document.querySelector('.tab.active').id;
    let convertedValue;
    let unit;
    if (activeTab === 'celsiusTab') {
        convertedValue = (inputValue * 9 / 5) + 32;
        unit = 'Fahrenheit';
    } else {
        convertedValue = (inputValue - 32) * 5 / 9;
        unit = 'Celsius';
    }

    document.getElementById('result').textContent = `${inputValue} ${activeTab === 'celsiusTab' ? 'Celsius' : 'Fahrenheit'} is equal to ${convertedValue.toFixed(2)} ${unit}.`;
}
document.getElementById('inputValue').addEventListener('keydown', function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        // Call the convertTemperature function if "Enter" key is pressed
        convertTemperature();
    }
});

function convertTemperature(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // Your conversion logic here
    // For example:
    var inputValue = document.getElementById("inputValue").value;
    var resultElement = document.getElementById("result");

    // Perform temperature conversion and update the resultElement.textContent
    // ...

    // Example conversion (Celsius to Fahrenheit):
    var celsius = parseFloat(inputValue);
    var fahrenheit = (celsius * 9/5) + 32;

    resultElement.textContent = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit`;
}
