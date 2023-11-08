import { Card, CardContent, CardHeader } from "./ui/card";

interface Props {
  title: string;
  description: string;
}

export function CategoryCard({ title, description }: Props) {
  return (
    <Card className="h-36 w-72">
      <CardHeader className="font-semibold text-xl">{title}</CardHeader>
      <CardContent>{description}</CardContent>
    </Card>
  );
}
