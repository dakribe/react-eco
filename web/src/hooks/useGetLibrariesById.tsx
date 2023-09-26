import { useQuery } from "@tanstack/react-query";
import ky from "ky";

type Library = {
  id: number;
  name: string;
  description: string;
  repoUrl: string;
};

async function getLibrariesById(id: number): Promise<Library[]> {
  const res = await ky.get(`http://localhost:8000/api/libraries/${id}`);
  return await res.json();
}

export default function useGetLibrariesById(categoryId: number) {
  return useQuery({
    queryKey: ["libraries", categoryId],
    queryFn: () => getLibrariesById(categoryId),
  });
}
