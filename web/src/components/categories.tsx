import useGetCategories from "../hooks/useGetCategories";

function Categories() {
  const { data, isLoading, isError } = useGetCategories();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error</p>;

  return <div>{data?.map((cat) => <p key={cat.name}>{cat.name}</p>)}</div>;
}

export default Categories;
