import Image from "next/image";
import { CategoryList } from "./_components/category-list";
import { Header } from "./_components/header";
import { Search } from "./_components/search";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <Image
          src="/banner-pizza.png"
          alt="Até 30% de desconto em pizzas"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="px-5 pt-6">
        <Image
          src="/banner-burguer.png"
          alt="A partir de R$17,90 em lanches"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
    </div>
  );
}
