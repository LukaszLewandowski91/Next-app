"use client";
import Link, { type LinkProps } from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type RouteType } from "next/dist/lib/load-custom-routes";

interface ActiveLinkProps extends LinkProps<RouteType> {
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export const ActiveLink = ({
  href,
  children,
  className,
  activeClassName,
  exact,
}: ActiveLinkProps) => {
  const pathname = usePathname();
  let isActive: boolean = false;
  let matchedPath: string = typeof href === "string" ? href : "";

  if (href && typeof href === "object" && href.pathname) {
    matchedPath = href.pathname;
  }

  if (matchedPath) {
    isActive = exact
      ? pathname === matchedPath
      : pathname.startsWith(matchedPath) &&
        (pathname[matchedPath.length] === "/" ||
          pathname.length === matchedPath.length);
  }

  return (
    <Link
      href={href}
      className={clsx(isActive ? activeClassName : className)}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};
