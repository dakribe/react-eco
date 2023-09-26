import { Skeleton } from "@mantine/core";
import useGetCategories from "../hooks/useGetCategories";
import { Link } from "react-router-dom";

function Categories() {
  const { data, isLoading, isError } = useGetCategories();

  if (isLoading)
    return (
      <>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={true} />
          ))}
      </>
    );

  if (isError) return <p>Error</p>;

  return (
    <div>
      {data?.map((cat) => (
        <Link
          key={cat.id}
          to={cat.id}
          style={{
            textDecoration: "none",
          }}
        >
          <p>{cat.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
