import { Outlet } from "@remix-run/react";

export default function BaseLayout() {
  return (
    <div>
      <h1>HELLO</h1>
      <Outlet />
    </div>
  );
}
