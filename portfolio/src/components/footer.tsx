import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-6 text-center text-2xl bg-(--primary) select-none">
      Created by{" "}
      <Link
        href="https://github.com/FernandoMMattos"
        className="cursor-pointer hover:text-(--text-secondary)"
      >
        @FernandoMMattos
      </Link>
    </footer>
  );
};

export default Footer;
