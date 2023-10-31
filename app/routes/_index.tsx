import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "~/db.server";
import { Category } from "@prisma/client";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json(await db.category.findMany());
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      {data.map((category: Category) => (
        <h1 key={category.id}>{category.title}</h1>
      ))}
    </div>
  );
}
