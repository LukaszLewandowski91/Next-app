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

export default function CategoryProductPage({
  params,
}: {
  params: { category: string; pageNumber: string };
}) {
  return (
    <h1>
      Category: {params.category} Page: {params.pageNumber}
    </h1>
  );
}
