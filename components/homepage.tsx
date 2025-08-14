"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const baseURL =
    "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public";

  const slides = [
    {
      image: `${baseURL}/hero.png`,
      title: "SELAMAT DATANG DI",
      subtitle: "WISATA DESA GATTARENG TOA",
      button: "Jelajahi Wisata",
      link: "/wisata",
    },
    {
      image: `${baseURL}/banga/hero.png`,
      title: "PERMANDIAN ALAM",
      subtitle: "BANGA",
      button: "Lihat Detail Wisata",
      link: "/wisata/permandian-banga",
    },
    {
      image: `${baseURL}/wisata/permandian-lereng.png`,
      title: "PERMANDIAN LERENG HIJAU",
      subtitle: "BULU DUA",
      button: "Lihat Detail Wisata",
      link: "/wisata/permandian-lereng",
    },
    {
      image: `${baseURL}/wisata/lembah-laparajo.png`,
      title: "LEMBAH LAPARAJO",
      subtitle: "",
      button: "Lihat Detail Wisata",
      link: "/wisata/lembah-laparajo",
    },
    {
      image: `${baseURL}/wisata/mt-bulu-dua.png`,
      title: "MT BULU DUA",
      subtitle: "",
      button: "Lihat Detail Wisata",
      link: "/wisata/mt-bulu-dua",
    },
    {
      image: `${baseURL}/wisata/mt-massimpolongnge.png`,
      title: "MT MASSIMPOLONGNGE",
      subtitle: "",
      button: "Lihat Detail Wisata",
      link: "/wisata/mt-massimpolongnge",
    },
    {
      image: `${baseURL}/wisata/air-terjun-laposo.png`,
      title: "AIR TERJUN LAPOSO",
      subtitle: "",
      button: "Lihat Detail Wisata",
      link: "/wisata/air-terjun-laposo",
    },
    {
      image: `${baseURL}/wisata/bolu-susu.png`,
      title: "BOLU SUSU",
      subtitle: "",
      button: "Lihat Detail Wisata",
      link: "/wisata/bolu-susu",
    },
    {
      image: `${baseURL}/wisata/dodol-pangi.png`,
      title: "DODOL PANGI",
      subtitle: "",
      button: "Lihat Detail Wisata",
      link: "/wisata/dodol-pangi",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="mt-16">
      <section
        id="hero"
        className="relative h-[667px] bg-cover bg-center flex items-center justify-center transition-all duration-500"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="bg-opacity-40 px-6 py-4 rounded-lg text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
            {slides[currentSlide].title}
            <br />
            {slides[currentSlide].subtitle}
          </h1>
          <button
            onClick={() => router.push(slides[currentSlide].link)}
            className="mt-4 bg-transparent border-2 border-white hover:bg-[#01AFEF] text-white px-4 py-2 rounded transition"
          >
            {slides[currentSlide].button}
          </button>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 text-white text-3xl bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-60"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 text-white text-3xl bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-60"
        >
          ›
        </button>
      </section>

      {/* Tentang Desa */}
      <section className="bg-[#F8F9FA] py-12 px-4 text-center">
        <h2 className="text-[#01AFEF] font-bold text-2xl mb-6">
          TENTANG DESA GATTARENG TOA
        </h2>
        <div className="flex justify-center">
          <img
            src={`${baseURL}/desa.jpg`}
            alt="Desa Gattareng Toa"
            className="rounded-lg shadow-lg w-120 max-w-xl mb-6"
          />
        </div>
        <p className="text-black max-w-3xl mx-auto text-center mb-4">
          Desa Gattareng Toa adalah salah satu desa ...
        </p>
        <p className="text-black max-w-3xl mx-auto text-center">
          Penyebab desa baru yang menggunakan nama Gattareng Toa adalah ...
        </p>
      </section>

      {/* Peta Administratif */}
      <section className="bg-white py-10 px-4 text-center">
        <h2 className="text-[#4AC2AD] font-bold text-2xl mb-6">
          PETA ADMINISTRATIF DESA
        </h2>
        <div className="flex justify-center">
          <img
            src={`${baseURL}/petaadmin.jpg`}
            alt="Peta Administratif"
            className="shadow-lg rounded-lg max-w-2xl w-full"
          />
        </div>
      </section>

      {/* Peta Wisata */}
      <section
        id="peta-wisata"
        className="bg-[#F8F9FA] max-w-full mx-auto py-12 px-15 md:px-90"
      >
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-[#4AC2AD] mb-4">
            PETA WISATA DESA GATTARENG TOA
          </h2>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1nv22gyILzi0UUSmu-A2ry-PQ1Gv-VH4&ehbc=2E312F"
            width="100%"
            height="425"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </section>
    </main>
  );
}