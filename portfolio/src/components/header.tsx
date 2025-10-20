"use client";

import Link from "next/link";
import ToggleTheme from "./toggleTheme";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center p-1 text-2xl font-extrabold border-b-1 select-none">
      <span>Welcome</span>
      <nav className="flex justify-around w-7/10">
        {pathname == "/" ? (
          <Link href="/about-me">About Me</Link>
        ) : (
          <Link href="/">Home</Link>
        )}
        <Link href="/projects">Projects</Link>
        <Link href="/certificates">Certificates</Link>
      </nav>
      <ToggleTheme />
    </header>
  );
};

export default Header;
