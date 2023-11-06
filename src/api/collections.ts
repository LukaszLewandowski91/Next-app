import { executeGraphql } from "./graphlApi";
import {
  CollectionGetBySlugDocument,
  CollectionsGetListDocument,
} from "@/gql/graphql";

export const getCollectionsList = async () => {
  const graphqlResponse = await executeGraphql(CollectionsGetListDocument, {});

  return graphqlResponse.collections;
};

export const getCollectionBySlug = async (collectionSlug: string) => {
  const graphqlResponse = await executeGraphql(CollectionGetBySlugDocument, {
    slug: collectionSlug,
  });

  return graphqlResponse.collections[0];
};
