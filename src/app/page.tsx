import NavbarComponent from "./components/navbar/NavbarComponent";
import HeroSection from "./components/hero/HeroSection";
import CorePillars from "./components/pillars/CorePillars";
import BookSection from "./components/book/BookSection";
import RopaSection from "./components/ropa/RopaSection";
import GithubSection from "./components/github/GithubSection";
import AboutSection from "./components/about/AboutSection";
import Footer from "./components/footer/Footer";

export default function Page() {
  return (
    <>
      <NavbarComponent />
      <main className="pt-20">
        {/* 1. Contenido — protagonismo principal */}
        <HeroSection />
        <CorePillars />

        {/* 2. Libro — segunda prioridad */}
        <BookSection />

        {/* 3. Ropa de Programador — tercera prioridad */}
        <RopaSection />

        {/* GitHub */}
        <GithubSection />

        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
