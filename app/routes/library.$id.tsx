import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getLibraryById } from "~/utils/library.server";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.id, "Missing library id");
  const library = await getLibraryById(params.id);
  return json(library);
}

export default function Library() {
  const library = useLoaderData<typeof loader>();
  return <div>{library?.name}</div>;
}
