import { getProductsCount, getProductsOffsetList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryProductPage({
  params,
}: {
  params: { pageNumber: string };
}) {
  const products = await getProductsOffsetList(parseInt(params.pageNumber) - 1);
  const totalProducts = await getProductsCount();

  const numberOfPages = Math.ceil(totalProducts / 8);

  return (
    <>
      <ProductList products={products} />
      <Pagination numberOfPages={numberOfPages} />
    </>
  );
}
