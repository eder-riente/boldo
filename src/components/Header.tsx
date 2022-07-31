import { Logo } from "./Logo";

interface Links {
  id: number;
  name: string;
  link: string;
}

const LINKS: Links[] = [
  { id: 1, name: "Product", link: "" },
  { id: 2, name: "Service", link: "" },
  { id: 3, name: "About", link: "" },
];

export function Header() {
  return (
    <header className="flex items-center justify-between w-full gap-28 mb-12">
      <Logo />
      <nav className="w-1/2 flex items-center justify-end gap-5">
        {LINKS.map((item: Links) => {
          return (
            <a key={item.id} href="#" className="text-gray-50">
              {item.name}
            </a>
          );
        })}
        <button className="py-2 px-10 rounded-full bg-gray-50 text-blue-900 text-sm font-bold">
          Log In
        </button>
      </nav>
    </header>
  );
}
