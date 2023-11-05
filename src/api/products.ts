import { executeGraphql } from "./graphlApi";
import {
  ProductGetByIdDocument,
  ProductsGetByCategoryDocument,
  ProductsGetListDocument,
} from "@/gql/graphql";
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

export const getProductsList = async (): Promise<ProductItemType[]> => {
  const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

  return graphqlResponse.products.map((product) => {
    return {
      id: product.id,
      category: product.categories[0]?.name || "",
      name: product.name,
      price: product.price,
      description: product.description,
      coverImage: {
        alt: product.name,
        src: product.images[0]?.url || "",
      },
    };
  });
};

export const getProductsListByCategorySlug = async (categorySlug: string) => {
  const data = await executeGraphql(ProductsGetByCategoryDocument, {
    slug: categorySlug,
  });

  const products = data.categories[0]?.products;

  return products?.map((product) => {
    return {
      id: product.id,
      category: product.categories[0]?.name || "",
      name: product.name,
      price: product.price,
      description: product.description,
      coverImage: {
        alt: product.name,
        src: product.images[0]?.url || "",
      },
    };
  });
};

export const getProductsOffsetList = async (offset: number) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=8&offset=${offset}`
  );
  const productResponse = (await res.json()) as ProductResponseItem[];

  const products = productResponse.map(productResponseItemToProductItemType);
  return products;
};

export const getProductById = async (productId: string) => {
  const { product } = await executeGraphql(ProductGetByIdDocument, {
    id: productId,
  });

  if (product) {
    return {
      id: product.id,
      category: product.categories[0]?.name || "",
      name: product.name,
      price: product.price,
      description: product.description,
      coverImage: {
        alt: product.name,
        src: product.images[0]?.url || "",
      },
    };
  }
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
