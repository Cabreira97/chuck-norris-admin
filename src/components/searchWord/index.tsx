
'use client'
import { useState } from "react";
import { useSearchWord } from "@/src/common/hooks/useSearchWord";
import { SearchResults } from "../searchResult";

export function SearchWord() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: dataSearchWord, loading } = useSearchWord({
    word: searchTerm
  });

  const handleSearch = () => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6 space-y-5">
        <div className="flex space-x-4"> {/* Novo container flexível */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Digite uma palavra"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg bg-gray-900 hover:bg-gray-700 active:bg-gray-800"
          >
            {loading ? 'Carregando...' : 'Buscar'}
          </button>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-40 text-gray-500">
          Carregando resultados...
        </div>
      ) : (
        <SearchResults results={dataSearchWord?.searchWord.result ?? []} />
      )}
    </div>
  );
}
