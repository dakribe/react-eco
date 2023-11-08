import { json } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { Header } from "~/components/header";
import { getCategories } from "~/models/category.server";

export const loader = async () => {
  const catgories = await getCategories();
  return json(catgories);
};

export default function BaseLayout() {
  const categories = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="w-1/6">
          <div className="flex">
            <ul className="flex flex-col mt-4 pl-10">
              {categories.map((category) => (
                <li key={category.id}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                    to={`/categories/${category.id}`}
                  >
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 max-w-5xl mx-auto mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
