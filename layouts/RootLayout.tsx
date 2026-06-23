import { Outlet } from "react-router-dom";
import Footer from "../src/Footer";
import Header from "../src/Header";
import Hero from "../src/Hero";

interface RootLayoutProps {
  children?: React.ReactNode;
  isErrorPage?: boolean;
}

export default function RootLayout({
  children,
  isErrorPage = false,
}: RootLayoutProps) {
  return (
    <div className="bg-amber-100 w-screen min-h-screen">
      <main className="md:mx-auto mx-8 sm:max-w-[80ch] flex flex-col font-sans">
        <Hero image={"joe-portrait.jpg"} />
        <Header title="Joe Vaughan" subheading="Marketing, socials, persona" />
        {/* If it's an error page, render the passed error component; otherwise, render normal routes */}
        {isErrorPage ? children : <Outlet />}
        <Footer />
      </main>
    </div>
  );
}
