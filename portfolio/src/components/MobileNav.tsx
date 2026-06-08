"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderKanban, Award, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about-me", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/certificates", label: "Certs", icon: Award },
];

const MobileNav = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav
      className="mobile-nav border-t border-[var(--secondary)] bg-[var(--bg)] px-2 pt-2 pb-5"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {navLinks.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex flex-col items-center gap-1 text-xs px-3 py-1 rounded-lg transition-colors ${
            pathname === href
              ? "text-[var(--accent)]"
              : "text-[var(--text-secondary)]"
          }`}
        >
          <Icon size={22} strokeWidth={pathname === href ? 2.5 : 1.5} />
          <span>{label}</span>
        </Link>
      ))}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex flex-col items-center gap-1 text-xs px-3 py-1 rounded-lg text-[var(--text-secondary)] cursor-pointer"
        >
          {theme === "dark" ? (
            <Moon size={22} strokeWidth={1.5} />
          ) : (
            <Sun size={22} strokeWidth={1.5} />
          )}
        </button>
      )}
    </nav>
  );
};

export default MobileNav;
