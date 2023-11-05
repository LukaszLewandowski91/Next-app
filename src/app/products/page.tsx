import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
  const products = await getProductsList();
  const totalProducts = products.length;
  const numberOfPages = Math.ceil(totalProducts / 8);

  return (
    <>
      <ProductList products={products} />
      <Pagination numberOfPages={numberOfPages} />
    </>
  );
}
