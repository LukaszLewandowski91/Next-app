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
}: {
  href: Route<T> | UrlObject;
  children: ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(`text-blue-200 hover:text-blue-600`, {
        underline: isActive,
      })}
    >
      {children}
    </Link>
  );
};
