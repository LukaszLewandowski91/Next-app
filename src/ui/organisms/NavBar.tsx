import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const NavLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "All" },
  { href: "/categories/t-shirts", label: "T-shirts" },
  { href: "/categories/hoodies", label: "Hoodies" },
  { href: "/categories/accessories", label: "Accessories" },
];
export const Nav = () => {
  const defaultClasses =
    "flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 px-1 pt-1 text-center text-sm font-medium text-slate-500";
  const activeClasses = defaultClasses + " border-blue-500";
  const classNames =
    defaultClasses +
    " border-transparent hover:border-gray-300 hover:text-slate-700";
  return (
    <header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
          <nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
            <div className="hidden flex-shrink-0 items-center lg:flex"></div>
            <ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
              {NavLinks.map((link) => (
                <li key={link.href} className="first:pl-4 last:pr-4 lg:px-0">
                  <ActiveLink
                    href={{ pathname: link.href }}
                    className={classNames}
                    activeClassName={activeClasses}
                  >
                    {link.label}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex h-full flex-1 items-center px-2 lg:ml-6 lg:h-16 lg:justify-end">
            <div className="ml-auto h-full lg:ml-4">
              <Link
                href="/cart"
                className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
              >
                <ShoppingCart
                  className="h-6 w-6 flex-shrink-0"
                  aria-hidden="true"
                />
                <div className="w-4">
                  <span className="ml-2 text-sm font-medium">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
