import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const thunkFetchMeteo = createAsyncThunk(
  'FETCH_METEO',
  async (cityName: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=b6b0c8aca4ea0fe1bad01cea0f3eb091`
    );


    return {
      name: cityName,
      temp: response.data.main.temp,
      icon: response.data.weather[0].icon,
    };
  }
);

export default thunkFetchMeteo;