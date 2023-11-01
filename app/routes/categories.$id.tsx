import { LoaderFunctionArgs, json } from "@remix-run/node";
import { getCategoryById } from "~/models/category.server";
import invariant from "tiny-invariant";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "Missing category id");
  const category = await getCategoryById(params.id);
  return json(category);
};

export default function Category() {
  const data = useLoaderData<typeof loader>();
  console.log(data);

  return (
    <div>
      <h1 className="text-3xl">{data?.title}</h1>
      <p>{data?.description}</p>
      {data?.libraries.map((library) => (
        <div key={library.id}>
          <h1>{library.name}</h1>
          <p>{library.description}</p>
        </div>
      ))}
    </div>
  );
}
