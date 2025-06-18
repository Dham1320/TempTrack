async function getWeather() {
  const location = document.getElementById("locationInput").value;
  const apiKey = "fa695f148ab84fbc928181225251806";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&api=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Location not found");
    const data = await response.json();

    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const city = data.location.name;

    document.getElementById("weatherResult").innerHTML =
      `🌍 <strong>${city}</strong><br>🌡️ Temperature: <strong>${temp}°C</strong><br>🌥️ Condition: ${condition}`;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      `<span style="color: #ffcccb;">❌ ${error.message}</span>`;
  }
}
