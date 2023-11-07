import type { Category } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getCategoryById(id: Category["id"]) {
  return prisma.category.findUnique({
    where: {
      id: id,
    },
    include: {
      libraries: true,
    },
  });
}

export async function getCategories() {
  return prisma.category.findMany({
    select: {
      id: true,
      title: true,
    },
  });
}
