"use client";
import { useGetCategory } from "@/src/common/hooks/useGetCategory";
import { useSearchCategory } from "@/src/common/hooks/useSearchCategory";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IconArrow } from "@/src/assets/icon/IconArrow";

export function SearchCategory() {
  const { data: dataCategories } = useGetCategory();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data: dataSearchCategory, loading } = useSearchCategory({
    category: selectedCategory,
  });

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6 space-y-5">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Selecione uma categoria</option>
          {dataCategories?.categories.categories.map((category: string) => ( // Corrigido para mapear corretamente as categorias
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {selectedCategory && (
        <>
          {loading ? (
            <div className="flex items-center justify-center h-40 text-gray-500">
              Carregando...
            </div>
          ) : (
            <div className="flex flex-wrap gap-5 p-6 space-y-5">
              <Image
                src={dataSearchCategory?.searchCategory?.icon_url ?? ""}
                width={50}
                height={50}
                alt="Foto do Chuck Randomico"
              />
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {dataSearchCategory?.searchCategory?.value ?? "Nenhuma frase encontrada."}
              </p>
              <div className="pt-0">
                <Link
                  href={dataSearchCategory?.searchCategory?.url ?? ""}
                  className="inline-block"
                >
                  <button
                    className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    Acessar Frase
                    <IconArrow className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          )}
        </>
      )}

      {!selectedCategory && (
        <div className="p-6 space-y-5 text-red-500">
          Selecione uma categoria para acessar a frase.
        </div>
      )}
    </div>
  );
}
