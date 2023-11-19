import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { Category } from "@prisma/client";
import { CategoryCard } from "~/components/categoryCard";
import { motion } from "framer-motion";
import { prisma } from "~/utils/db.server";

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
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center mt-32"
      >
        <h1 className="text-6xl font-bold">
          Explore packages in the <span className="text-primary">React </span>
          ecosystem
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="my-10"
      >
        <p className="font-medium text-2xl py-2">Categories</p>
        <div className="flex justify-between flex-wrap">
          {data.map((category: Category) => (
            <Link key={category.id} to={`/categories/${category.id}`}>
              <CategoryCard
                title={category.title}
                description={category.description}
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
