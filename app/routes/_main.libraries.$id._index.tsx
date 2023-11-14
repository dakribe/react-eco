import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getLibraryReadme } from "~/models/library.server";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "Missing library id");
  const readmeUrl = await getLibraryReadme(params.id);
  const url = readmeUrl?.readMeUrl;

  const res = await fetch(url);
  const markdown = await res.text();
  return json(markdown);
};

export default function LibrariesIndex() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <Markdown rehypePlugins={[rehypeHighlight]}>{data}</Markdown>
    </div>
  );
}
