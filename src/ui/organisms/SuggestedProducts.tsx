import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
  const products = await getProductsList();
  // await sleep(5000);
  return (
    <div className="py-16">
      <h2 className="py-8 text-xl font-semibold  leading-7">
        Similar Products
      </h2>
      <ProductList products={products.slice(-4)} />
    </div>
  );
};
