"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex h-10 w-20 items-center rounded-full 
                 bg-secondary-light dark:bg-secondary-dark 
                 transition-colors duration-500 cursor-pointer border-2"
    >
      <span
        className={`absolute left-1 flex h-8 w-8 items-center justify-center rounded-full 
                     shadow-md text-xl transition-all duration-500
                    ${theme === "dark" ? "translate-x-0" : "translate-x-10"}`}
      >
        {theme === "dark" ? "🌑" : "☀️"}
      </span>
    </button>
  );
};

export default ToggleTheme;
