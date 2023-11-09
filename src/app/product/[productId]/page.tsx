import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductDescription } from "@/ui/atoms/Productdescription";

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const product = await getProductById(params.productId);
  if (!product) {
    notFound();
  }
  return {
    title: `${product.name} - Nasz Sklep`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Nasz Sklep`,
      description: product.description,
      images: product.images[0]?.url,
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

  if (!product) {
    notFound();
  }

  return (
    <>
      <article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {product.images[0] && (
          <ProductImage src={product.images[0].url} alt="" />
        )}
        <ProductDescription product={product} />
      </article>
      <aside>
        <Suspense>
          {product.collections && <SuggestedProductsList product={product} />}
        </Suspense>
      </aside>
    </>
  );
}
