import { Category } from "@prisma/client";
import { prisma } from "./db.server";

export async function getCategories() {
  return await prisma.category.findMany();
}

export async function getCategoryById(id: Category["id"]) {
  return await prisma.category.findUnique({
    where: {
      id: id,
    },
    include: {
      libraries: true,
    },
  });
}
