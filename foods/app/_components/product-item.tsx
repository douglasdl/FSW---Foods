import { Prisma } from "@prisma/client";
import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

export async function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="w-36 min-w-36 space-y-2">
      <div className="relative h-36 w-36">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute left-2 top-2 flex items-center gap-0.5 rounded-full bg-primary px-2 py-0.5 text-white">
            <ArrowDownIcon size={12} />
            <span className="text-xs font-semibold">
              {product.discountPercentage}%
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <span className="truncate text-sm">{product.name}</span>
        <div className="flex items-baseline gap-1">
          <span className="font-semibold">
            {formatCurrency(calculateProductTotalPrice(product))}
          </span>
          {product.discountPercentage > 0 && (
            <span className="text-xs text-muted-foreground line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <span className="truncate text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
    </div>
  );
}
