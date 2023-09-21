import { useParams } from "react-router-dom";
import useGetLibrariesById from "../hooks/useGetLibrariesById";

type Params = {
  categoryId: string | undefined;
};

function Libraries() {
  const { categoryId } = useParams<Params>();

  const categoryIdInt = parseInt(categoryId as string, 10);

  const { data, isLoading, isError } = useGetLibrariesById(categoryIdInt);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error</p>;

  return (
    <div>
      {data?.map((library) => <p key={library.name}>{library.name}</p>)}
    </div>
  );
}

export default Libraries;
