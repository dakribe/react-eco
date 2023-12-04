import { prisma } from "./db.server";

export async function getCategories() {
  return await prisma.category.findMany();
}
