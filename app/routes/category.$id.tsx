import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCategoryById } from "~/utils/category.server";
import invariant from "tiny-invariant";
import LibraryCard from "~/components/library-card";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.id, "Missing category id");
  const category = await getCategoryById(params.id);
  return json(category);
}

export default function Libraries() {
  const category = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto max-w-5xl grid divide-y mt-20">
      <div className="pb-2">
        <h1 className="text-3xl font-bold my-2">{category?.title}</h1>
        <p>{category?.description}</p>
      </div>
      <div className="pt-4">
        <ul>
          {category?.libraries.map((library) => (
            <LibraryCard
              name={library.name}
              description={library.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
