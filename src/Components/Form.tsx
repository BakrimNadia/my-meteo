
export function Form() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold underline mb-4">
                Formulaire de recherche
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <form>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Nom de la ville:
                    </label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                        placeholder="Entrez le nom de la ville"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                    >
                        Rechercher
                    </button>
                </form>
            </div>
        </div>
    );
}