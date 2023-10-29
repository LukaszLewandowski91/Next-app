import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const product = await getProductById(params.productId);
  return {
    title: `${product.name} - Nasz Sklep`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Nasz Sklep`,
      description: product.description,
      images: [product.coverImage.src],
    },
  };
};

export const generateStaticParams = async () => {
  const products = await getProductsList();
  return products
    .map((product) => ({
      productId: product.id,
    }))
    .slice(0, 3);
};

export default async function SingleProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = await getProductById(params.productId);
  return (
    <>
      <article className="max-w-xs">
        <ProductCoverImage {...product.coverImage} />
        <ProductListItemDescription product={product} />
      </article>
      <aside>
        <Suspense>
          <SuggestedProductsList />
        </Suspense>
      </aside>
    </>
  );
}
