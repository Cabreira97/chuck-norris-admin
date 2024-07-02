
import Image from "next/image";
import Link from "next/link";

interface SearchResultProps {
  results: {
    icon_url?: string;
    value?: string;
    url?: string;
  }[];
}

export function SearchResults({ results }: SearchResultProps) {
  if (results.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        Nenhum resultado encontrado.
      </div>
    );
  }

  return (
    <div className="flex flex-wrap space-x-4 space-y-4">
      {results.map((result, index) => (
        <div key={index} className="p-6 space-y-5">
          <Image src={result?.icon_url ?? ''} width={50} height={50} alt='Foto do Chuck Randomico' />
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {result?.value ?? 'Loading...'}
          </p>
          <div className="pt-0">
            <Link href={result?.url ?? ''} className="inline-block">
              <button
                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Acessar Frase
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
