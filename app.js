const temperatureSpan = document.querySelector("#temperature-output");
 const apiUrl = "https://api.weather.gov/gridpoints/MFL/110,50/forecast";

const getTemperature = async () => {    
    const response=await fetch(apiUrl)
    const data = await response.json()
    temperatureSpan.textContent = data.properties.periods[0].temperature
}
getTemperature()