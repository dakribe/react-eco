import { Link } from "@remix-run/react";

interface LibraryCardProps {
  name: string;
  description: string;
}

export default function LibraryCard({ name, description }: LibraryCardProps) {
  return (
    <div className="bg-slate-800 flex flex-col rounded-md h-28 w-96">
      <div className="px-6 pt-2 ">
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-slate-100">{description}</p>
      </div>
      <div className="flex justify-center border-t-2">
        <Link to="">Github</Link>
      </div>
    </div>
  );
}
