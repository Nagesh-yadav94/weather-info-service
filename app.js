const express = require('express');
const axios = require('axios')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4500;

app.get('/weather', async (request, response) => {
  const city = request.query.city;
  if (!city) {
    return response.status(400).send({ error: 'Please provide a city name.' });
  }

  const apiKey = process.env.WEATHER_STACK_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response_data = await axios.get(url);
    const data = response_data.data;

    if (data.error) {
      const status_code = response.status(400)
      const display_error = status_code.send({ error: 'Unable to find location.' });
      return display_error
    }

    const updated_data = response.send({
      location: data.location.name,
      temperature: data.current.temperature,
      description: data.current.weather_descriptions[0],
      humidity: data.current.humidity,
      wind_speed: data.current.wind_speed,
    });
    console.log(updated_data);

  } catch (error) {
    const status_code = response.status(500)
    const display_error = status_code.send({ error: 'Failed to fetch weather data.' });
    return display_error
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
