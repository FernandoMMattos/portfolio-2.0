import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-6 text-center text-2xl bg-[var(--secondary)] select-none">
      Created by{" "}
      <Link
        href="https://github.com/FernandoMMattos"
        className="cursor-pointer hover:text-[var(--text-secondary)]"
      >
        @FernandoMMattos
      </Link>
    </footer>
  );
};

export default Footer;
