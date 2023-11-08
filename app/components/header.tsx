import { Link } from "@remix-run/react";

export function Header() {
  return (
    <div className="w-full border-primary-foreground border-b h-12 items-center flex justify-between align-middle px-10">
      <Link to="/">
        <p className="white text-2xl font-semibold">React Eco</p>
      </Link>
      <Link to="https://github.com/dakribe/react-eco">
        <span>Github</span>
      </Link>
    </div>
  );
}
