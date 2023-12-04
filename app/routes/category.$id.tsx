import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getCategoryById } from "~/utils/category.server";
import invariant from "tiny-invariant";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.id, "Missing category id");
  const category = await getCategoryById(params.id);
  return json(category);
}

export default function Libraries() {
  const category = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>{category?.title}</h1>
      <ul>
        {category?.libraries.map((library) => (
          <Link key={library.id} to={`/library/${library.id}`}>
            {library.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
