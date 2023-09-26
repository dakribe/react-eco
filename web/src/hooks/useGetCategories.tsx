import { useQuery } from "@tanstack/react-query";
import ky from "ky";

type Category = {
  ID: number;
  name: string;
  description: string;
};

async function getCategories(): Promise<Category[]> {
  const res = ky.get("http://localhost:8000/api/categories");
  return res.json();
}

export default function useGetCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
}
