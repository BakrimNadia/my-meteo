'use client';

import { useState } from 'react';
import { useAppDispatch } from '../app/Store/hooks';
import thunkFetchMeteo from '../app/Store/thunkFetchMeteo';

export function Form() {
    const dispatch = useAppDispatch();

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="mt-10 text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-orange-500 drop-shadow-lg mb-4">
                Quel temps fait-il aujourd&apos;hui?
            </h1>
            <div className="p-6 rounded-lg shadow-xl w-80">
               <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(thunkFetchMeteo(inputValue));
        setInputValue('');
      }}
                    className="flex flex-col items-center"
                >
                    <label className="mb-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-orange-500">
                        Météo par ville:
                    </label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                        placeholder="Entrez le nom de la ville"
                    />            
            <button
                 type="submit"
                className="bg-gradient-to-b from-blue-300 to-gray-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            >
                Rechercher
            </button>
                </form>
            </div>
        </div>
    );
}