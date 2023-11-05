import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByCategorySlug } from "@/api/products";

export const generateStaticParams = async ({
  params,
}: {
  params: { category: string };
}) => {
  if (params.category === "t-shirts") {
    return [{ pageNumber: "1" }, { pageNumber: "2" }];
  } else {
    return [{ pageNumber: "1" }];
  }
};

export default async function CategoryProductPage({
  params,
}: {
  params: { category: string; pageNumber: string };
}) {
  const products = await getProductsListByCategorySlug(params.category);

  if (!products) {
    notFound();
  }
  return (
    <>
      <h1>
        Test {params.category}, strona {params.pageNumber}
      </h1>
      <ProductList products={products} />
    </>
  );
}
