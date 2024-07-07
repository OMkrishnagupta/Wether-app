const input = document.getElementById("input");
const button = document.getElementById("search-button");
const city=document.getElementById("cityName");
const time=document.getElementById("time");
const temperature=document.getElementById("temp");

async function getData(cityName) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5d55f21ac3f044afac6122607240707&q=${cityName}&aqi=yes`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    // console.log(result);
    city.innerText=`${result.location.name},${result.location.region} - ${result.location.country}`;
    time.innerText =`Time : ${result.location.localtime}`;
    temperature.innerText = `Temperature :${result.current.temp_c} celcius `;
});













// http://api.weatherapi.com/v1/current.json?key=5d55f21ac3f044afac6122607240707&q=London&aqi=yes