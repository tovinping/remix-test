import { Outlet } from "remix";
import type { LinksFunction } from "remix";
import styleUrl from '~/styles/jokes.css'
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleUrl
    }
  ];
};
export default function JokesRoute() {
  return (
    <div>
      <h1 className="title">JOKES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}