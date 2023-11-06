import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsListByCollectionSlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionBySlug } from "@/api/collections";

export const generateMetadata = async ({
  params,
}: {
  params: { collectionName: string };
}): Promise<Metadata> => {
  const collection = await getCollectionBySlug(params.collectionName);
  if (!collection) {
    notFound();
  }
  const { description, name, image } = collection;
  return {
    title: `${name} - Nasz Sklep`,
    description: description,
    openGraph: {
      title: `${name} - Nasz Sklep`,
      images: image?.url,
    },
  };
};

export default async function CollectionPage({
  params,
}: {
  params: { collectionName: string };
}) {
  const products = await getProductsListByCollectionSlug(params.collectionName);
  const collection = await getCollectionBySlug(params.collectionName);
  if (!products) {
    notFound();
  }
  return (
    <>
      <h1>Collection {collection?.name}</h1>
      <ProductList products={products} />
    </>
  );
}
