
export function CityList() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold underline mb-4">
                Liste des villes
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-xl font-semibold mb-2">Villes disponibles</h2>
                <ul className="list-disc pl-5">
                    <li>Paris</li>
                    <li>Lyon</li>
                    <li>Marseille</li>
                </ul>
            </div>
        </div>
    );
}