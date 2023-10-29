"use client";
import { type UrlObject } from "url";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = <T extends string>({
  href,
  children,
  className,
  activeClassName,
}: {
  href: Route<T> | UrlObject;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(className, isActive && activeClassName)}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};
