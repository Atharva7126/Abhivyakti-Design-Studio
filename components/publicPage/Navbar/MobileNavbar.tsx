"use client";

import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { cn } from "cn";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 w-full md:hidden">
      <div className="relative z-60 flex w-full items-center justify-between bg-brand-primary p-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-lg font-semibold tracking-tight text-brand-secondary"
        >
          Ar. Aboli Raut
        </Link>

        <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 flex min-h-screen flex-col bg-brand-primary px-6 pb-8 pt-28 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible -translate-x-full opacity-0",
        )}
      >
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              style={{
                transitionDelay: isOpen ? `${150 + index * 80}ms` : "0ms",
              }}
              className={cn(
                "group flex items-center justify-between border-b border-brand-secondary/15 py-5 transition-all duration-500",
                isOpen
                  ? "translate-x-2 opacity-100"
                  : "translate-x-0 opacity-0",
              )}
            >
              <span className="font-medium text-4xl text-brand-secondary transition-colors duration-300 group-hover:text-amber-700">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
