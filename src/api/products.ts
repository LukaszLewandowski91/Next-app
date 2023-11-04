import {
  ProductsGetListDocument,
  type TypedDocumentString,
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

const executeGraphql = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables: TVariables
): Promise<TResult> => {
  if (!process.env.GRAPHQL_URL) {
    throw TypeError("GRAPHQL_URL is not defined");
  }
  const res = await fetch(process.env.GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  type GraphQLResponse<T> =
    | { data?: undefined; errors: { message: string }[] }
    | { data: T; errors?: undefined };

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(`GraphQL Error`, { cause: graphqlResponse.errors });
  }

  return graphqlResponse.data;
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
