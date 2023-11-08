import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Button } from "~/components/ui/button";
import { getLibrary } from "~/models/library.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "Missing library id");

  const library = await getLibrary(params.id);

  if (!library) {
    throw new Response("Not found", { status: 404 });
  }

  return json(await getLibrary(params.id));
};

export default function Library() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{data?.name}</h1>
        <div className="flex space-x-4">
          <Link to={data?.websiteUrl}>
            <Button className="w-20 bg-foreground">Website</Button>
          </Link>
          <Link to={data?.repoUrl}>
            <Button className="w-20">Github</Button>
          </Link>
        </div>
      </div>
      <p className="py-2">{data?.description}</p>
    </div>
  );
}
