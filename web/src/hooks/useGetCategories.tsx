import { useQuery } from "@tanstack/react-query";

type Category = {
  ID: number;
  name: string;
  description: string;
};

async function getCategories(): Promise<Category[]> {
  const res = await fetch("http://localhost:8000/api/categories");
  return await res.json();
}

export default function useGetCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
