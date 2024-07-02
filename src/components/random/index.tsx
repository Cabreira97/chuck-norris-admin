"use client";
import { IconArrow } from "@/src/assets/icon/IconArrow";
import { usePhraseRandom } from "@/src/common/hooks/usePharseRandom";
import Image from "next/image";
import Link from "next/link";

export function Random() {
  const { data: dataRandom, loading } = usePhraseRandom();
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      {loading ? (
        <div className="flex items-center justify-center h-40 text-gray-500">
          Carregando...
        </div>
      ) : (
        <>
          <div className="p-6 space-y-5">
            <Image
              src={dataRandom?.random.icon_url ?? ""}
              width={50}
              height={50}
              alt="Foto do Chuck Randomico"
            />
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              {dataRandom?.random.value ?? "Loading..."}
            </p>
          </div>
          <div className="p-6 pt-0">
            <Link href={dataRandom?.random.url ?? ""} className="inline-block">
              <button
                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Acessar Frase
                <IconArrow className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </>
      )}
    </div >
  );
}
