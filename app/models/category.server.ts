import { Category } from "@prisma/client";
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
