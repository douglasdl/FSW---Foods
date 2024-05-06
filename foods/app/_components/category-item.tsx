import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

export async function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="my-1 flex min-w-max items-center justify-start gap-3 rounded-full bg-white px-4 shadow-md">
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />
      <span className="py-3 text-sm font-semibold ">{category.name}</span>
    </div>
  );
}
