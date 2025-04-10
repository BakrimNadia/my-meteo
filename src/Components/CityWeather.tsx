'use client';

import type { ICity } from '../@types/city';

export function CityWeather({ city }: { city: ICity }) {
    return (
        <div className="text-center font-bold bg-gray-300  rounded-lg shadow-xl mb-2 p-2 flex flex-col items-center">
        <h2
        className="bg-gradient-to-b from-blue-400 to-gray-500 text-transparent bg-clip-text font-extrabold text-2xl mb-2"
        >{city.name}</h2>
        <img
          src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`}
          alt="nuageux"
          className="w-20 h-20 mb-2"
        />
        <h3>{city.temp}°C</h3>
      </div>
    );
    }