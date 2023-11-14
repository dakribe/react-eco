import type { Library } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getLibrary(id: Library["id"]) {
  return prisma.library.findUnique({
    where: {
      id,
    },
  });
}

export async function getLibraryReadme(id: Library["id"]) {
  return prisma.library.findUnique({
    where: {
      id,
    },
    select: {
      readMeUrl: true,
    },
  });
}
