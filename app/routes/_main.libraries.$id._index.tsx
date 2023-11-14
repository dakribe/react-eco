import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json("Repo data");
};

export default function LibrariesIndex() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
