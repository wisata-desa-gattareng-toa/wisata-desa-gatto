"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa"; // untuk icon menu

export default function Navigasi() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWisataOpen, setIsWisataOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();

  const logoLFS =
    "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/logo.png";

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src={logoLFS}
                alt="Logo"
                className="h-11 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-bold text-black">
            <Link
              href="/"
              className={
                pathname === "/" && activeSection === "hero"
                  ? "text-[#01AFEF]"
                  : "text-black"
              }
            >
              Beranda
            </Link>
            <Link
              href="/#peta-wisata"
              className={
                pathname === "/" && activeSection === "peta-wisata"
                  ? "text-[#01AFEF]"
                  : "text-black"
              }
            >
              Peta Lokasi Wisata
            </Link>
            <div className="relative group">
              <Link
                href="/wisata"
                className={`flex items-center focus:outline-none ${
                  pathname.startsWith("/wisata")
                    ? "text-[#01AFEF]"
                    : "text-black"
                }`}
              >
                <span className="mr-1">Wisata</span> ▾
              </Link>
              <div className="absolute left-0 top-full hidden group-hover:block bg-[#F8F9FA] shadow-lg rounded-md">
                <Link
                  href="/wisata/#wisata-alam"
                  className="block px-6 py-2 whitespace-nowrap hover:bg-gray-100"
                >
                  Wisata Alam
                </Link>
                <Link
                  href="/wisata/#wisata-kuliner"
                  className="block px-6 py-2 whitespace-nowrap hover:bg-gray-100"
                >
                  Wisata Kuliner
                </Link>
              </div>
            </div>
            <Link
              href="/galeri"
              className={
                pathname === "/galeri" ? "text-[#01AFEF]" : "text-black"
              }
            >
              Galeri Wisata
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center text-black">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <Link
            href="/"
            className={`block px-4 py-2 ${
              pathname === "/" ? "text-[#01AFEF]" : "text-black"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link
            href="/#peta-wisata"
            className={`block px-4 py-2 ${
              pathname === "/" && activeSection === "peta-wisata"
                ? "text-[#01AFEF]"
                : "text-black"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Peta Lokasi Wisata
          </Link>

          {/* Wisata Dropdown Mobile */}
          <button
            onClick={() => setIsWisataOpen(!isWisataOpen)}
            className={`w-full text-left px-4 py-2 font-bold ${
              pathname.startsWith("/wisata") ? "text-[#01AFEF]" : "text-black"
            }`}
          >
            Wisata ▾
          </button>
          {isWisataOpen && (
            <div className="pl-6 text-black">
              <Link
                href="/wisata/#wisata-alam"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Wisata Alam
              </Link>
              <Link
                href="/wisata/#wisata-kuliner"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Wisata Kuliner
              </Link>
            </div>
          )}

          <Link
            href="/galeri"
            className={`block px-4 py-2 ${
              pathname === "/galeri" ? "text-[#01AFEF]" : "text-black"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Galeri Wisata
          </Link>
        </div>
      )}
    </nav>
  );
}