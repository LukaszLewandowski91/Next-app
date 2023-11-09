import { ProductList } from "./ProductList";
import { type ProductListItemFragment } from "@/gql/graphql";
import { getProductsListByCollectionSlug } from "@/api/products";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type SingleProductDescriptionProps = {
  product: ProductListItemFragment;
};

export const SuggestedProductsList = async ({
  product: { collections },
}: SingleProductDescriptionProps) => {
  const slug = collections[0]?.slug;
  if (!slug) {
    return null;
  }
  const products = await getProductsListByCollectionSlug(slug);
  // await sleep(5000);

  return (
    <div className="py-16" data-testid="related-products">
      <h2 className="py-8 text-xl font-semibold  leading-7">
        Similar Products for collection {collections[0]?.name}
      </h2>

      {products && <ProductList products={products.slice(-4)} />}
    </div>
  );
};
