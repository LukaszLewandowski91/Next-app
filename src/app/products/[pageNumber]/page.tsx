export default function ProductPage({
  params,
}: {
  params: { pageNumber: string };
}) {
  return (
    <>
      <h1>Test {params.pageNumber}</h1>
    </>
  );
}
