interface CategoryCardProps {
  title: string;
  description: string;
}

export function CategoryCard({ title }: CategoryCardProps) {
  return (
    <div className="rounded-md bg-slate-800 h-20 w-80 hover:cursor-pointer">
      <p className="text-xl p-4 font-semibold">{title}</p>
    </div>
  );
}
