"use client";

import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="desktop-only flex justify-between items-center p-1 text-2xl font-extrabold border-b select-none">
      <span>Welcome</span>
      <nav className="flex justify-around flex-1 mx-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "underline underline-offset-4" : ""}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
