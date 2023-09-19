import useGetCategories from "../hooks/useGetCategories";

function Categories() {
  const { data, isLoading, isError } = useGetCategories();
  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error</p>;

  return <div>{data?.map((cat) => <p>{cat.name}</p>)}</div>;
}

export default Categories;
