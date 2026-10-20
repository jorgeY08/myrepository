async function getWeather() {
  const apiKey = document.getElementById("apiKey").value.trim();

  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: "Monterrey,MX",
          appid: apiKey,
          units: "metric"
        }
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(error.response?.data);
  }
}