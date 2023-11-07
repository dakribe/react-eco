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
    <div>
      <Header />
      <div className="flex">
        <ul>
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
        <Outlet />
      </div>
    </div>
  );
}
