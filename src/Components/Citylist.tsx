'use client';

import { useAppSelector } from '../app/Store/hooks';
import { RootState } from '../app/Store/store';
import { CityWeather } from './CityWeather';

export default function Citylist() {
  const cities = useAppSelector((state: RootState) => state.cities);
    return (
        <div className="flex flex-col items-center justify-center mt-10 mb-5">
            <h1 className="text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-orange-500 mb-4 mt-10">
                Liste des villes recherchées
            </h1>
            <div className=" p-6 text-center w-100">
      {cities.map((city) => (
        <CityWeather key={city.name} city={city} />
      ))}
    </div>
        </div>
    );
}