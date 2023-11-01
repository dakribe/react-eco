import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Category } from "@prisma/client";
import { Button } from "~/components/ui/button";
import { prisma } from "~/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json(await prisma.category.findMany());
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      {data.map((category: Category) => (
        <Link to={`/categories/${category.id}`}>
          <h1 key={category.id}>{category.title}</h1>
        </Link>
      ))}
      <Button>Hello world</Button>
    </div>
  );
}
