'use client';

import { useAppSelector } from '../app/Store/hooks';
import { RootState } from '../app/Store/store';
import { CityWeather } from './CityWeather';

export default function Citylist() {
  const cities = useAppSelector((state: RootState) => state.cities);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold underline mb-4">
                Liste des villes
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
      {cities.map((city) => (
        <CityWeather key={city.name} city={city} />
      ))}
    </div>
        </div>
    );
}