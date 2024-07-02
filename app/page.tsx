// pages/index.tsx (ou Home.tsx)

import { Menu } from "@/src/components/menu";
import { Random } from "@/src/components/random";
import { SearchCategory } from "@/src/components/searchCategory";
import { SearchWord } from "@/src/components/searchWord";

export default function Home() {
  return (
    <main className=''>
      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div className="md:w-96">
          <SearchCategory />
          <Random />
        </div>
        <SearchWord />
      </div>

    </main>
  );
}
