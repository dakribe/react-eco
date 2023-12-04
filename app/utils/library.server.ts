import { Library } from "@prisma/client";
import { prisma } from "./db.server";

export async function getLibraryById(id: Library["id"]) {
  return await prisma.library.findUnique({
    where: {
      id: id,
    },
  });
}
