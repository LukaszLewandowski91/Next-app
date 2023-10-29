import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
};
export const getProductsList = async () => {
  const res = await fetch(
    "https://naszsklep-api.vercel.app/api/products?take=8"
  );
  const productResponse = (await res.json()) as ProductResponseItem[];

  const products = productResponse.map(productResponseItemToProductItemType);
  return products;
};

export const getProductsOffsetList = async (offset: number) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=8&offset=${offset}`
  );
  const productResponse = (await res.json()) as ProductResponseItem[];

  const products = productResponse.map(productResponseItemToProductItemType);
  return products;
};

export const getProductsCount = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
  const productResponse = (await res.json()) as ProductResponseItem[];

  const products = productResponse.map(productResponseItemToProductItemType);
  return products.length;
};

export const getProductById = async (id: ProductItemType["id"]) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${id}`
  );

  const productResponse = (await res.json()) as ProductResponseItem;

  return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
  product: ProductResponseItem
): ProductItemType => {
  return {
    id: product.id,
    category: product.category,
    name: product.title,
    price: product.price,
    description: product.description,
    coverImage: {
      alt: product.title,
      src: product.image,
    },
  };
};
