import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { Category } from "@prisma/client";
import { prisma } from "~/db.server";
import { CategoryCard } from "~/components/categoryCard";

export const meta: MetaFunction = () => {
  return [
    { title: "React Eco" },
    { name: "description", content: "Explore packages in the React ecosystem" },
  ];
};

export const loader = async () => {
  return json(await prisma.category.findMany());
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mt-20">
        <h1 className="text-6xl font-bold">
          Explore packages in the <span className="text-primary">React </span>
          ecosystem
        </h1>
      </div>
      <p className="text-2xl font-semibold py-4">Categories</p>
      <div className="flex space-x-6">
        {data.map((category: Category) => (
          <Link key={category.id} to={`/categories/${category.id}`}>
            <CategoryCard
              title={category.title}
              description={category.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
