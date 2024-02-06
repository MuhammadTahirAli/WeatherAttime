// const cloud_pct = document.getElementById("cloud_pct");
const temp = document.getElementById("temp");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const submit = document.getElementById("submit");

const getweather = (city) => {     ////////////////  Function within a function is called HOF function , usaily asked interview question in java-script 
  cityName.innerHTML = city;
  const fetchData = async () => {
    const url =
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "efcdde7201msh3dfbc37ad38cde3p1980eejsn26f48d3cc5f2",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the response as JSON
      console.log(result);

      // Access the properties from the parsed JSON
    //   cloud_pct.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
    } catch (error) {
      console.error(error);
    }
  };

  // Call the async function
  fetchData();
};

submit.addEventListener("click", (e) => {
  console.log("Button clicked");
  getweather(city.value);
  e.preventDefault();
});

getweather("karachi");
