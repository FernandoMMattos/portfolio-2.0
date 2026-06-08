import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Fernando Mattos — Full Stack Developer",
  description:
    "Portfolio of Fernando Mattos, a Full Stack Developer specialising in React, Next.js, TypeScript, NestJS, Express. and Node.js",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Header />
          <div className="flex flex-col flex-grow pb-20 md:pb-0">
            {children}
          </div>
          <Footer />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
