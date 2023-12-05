import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { CategoryCard } from "~/components/category-card";
import { getCategories } from "~/utils/category.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return json(await getCategories());
};

export default function Index() {
  const categories = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto max-w-5xl mt-20">
      <div className="mb-10">
        <h1 className="text-6xl text-center font-black">
          Explore open source packages in the{" "}
          <span className="text-blue-400">React</span> ecosystem
        </h1>
      </div>
      <div className="flex space-x-4 justify-between">
        {categories.map((category) => (
          <div key={category.id}>
            <Link to={`/category/${category.id}`}>
              <CategoryCard
                title={category.title}
                description={category.description}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
