"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();

  const routes = data.map((item) => ({
    href: `/category/${item.id}`,
    label: item.name,
    active: pathname === `/category/${item.id}`,
  }));

  return (
    <nav
      className="
      mx-6
      flex
      items-center
      space-x-4
      lg:space-x-6
    "
    >
      {routes.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            item.active ? "text-black" : "text-neutral-500"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
