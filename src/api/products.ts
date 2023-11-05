import { executeGraphql } from "./graphlApi";
import {
  ProductGetByIdDocument,
  type ProductListItemFragment,
  ProductsGetByCategoryDocument,
  ProductsGetListDocument,
} from "@/gql/graphql";

export const getProductsList = async () => {
  const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

  return graphqlResponse.products;
};

export const getProductsListByCategorySlug = async (categorySlug: string) => {
  const data = await executeGraphql(ProductsGetByCategoryDocument, {
    slug: categorySlug,
  });

  return data.categories[0]?.products;
};

// export const getProductsOffsetList = async (offset: number) => {
//   const res = await fetch(
//     `https://naszsklep-api.vercel.app/api/products?take=8&offset=${offset}`
//   );
//   const productResponse = (await res.json()) as ProductResponseItem[];

//   const products = productResponse.map(productResponseItemToProductItemType);
//   return products;
// };

export const getProductById = async (
  productId: ProductListItemFragment["id"]
) => {
  const { product } = await executeGraphql(ProductGetByIdDocument, {
    id: productId,
  });

  return product;
};
