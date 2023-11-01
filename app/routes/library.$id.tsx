import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getLibrary } from "~/models/library.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "Missing library id");
  return json(await getLibrary(params.id));
};

export default function Library() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
    </div>
  );
}
