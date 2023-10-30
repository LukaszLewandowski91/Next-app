import { CheckCheck } from "lucide-react";
import { type ProductItemType } from "../types";
import { formatMoney } from "@/utils";

type SingleProductDescriptionProps = {
  product: ProductItemType;
};

export const ProductDescription = ({
  product: { name, price, description },
}: SingleProductDescriptionProps) => {
  return (
    <div className="px-6">
      <h1 className="flex-auto text-3xl font-bold tracking-tight text-slate-900">
        {name}
      </h1>
      <div className="mt-4 flex items-center">
        <div className="font-base small-caps text-lg text-slate-800">
          {formatMoney(price / 100)}
        </div>
      </div>
      <div className="mt-4 space-y-6">
        <p className="font-sans text-base text-slate-500">{description}</p>
      </div>
      <div className="mt-6 flex items-center">
        <CheckCheck
          className="h-5 w-5 flex-shrink-0 text-blue-500"
          aria-hidden="true"
        />
        <p className="ml-1 text-sm font-semibold text-slate-500">In Stock</p>
      </div>
    </div>
  );
};
