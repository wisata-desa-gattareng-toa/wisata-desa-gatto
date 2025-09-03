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
      {/* HERO */}
      <section
        id="hero"
        className="relative h-[500px] sm:h-[667px] bg-cover bg-center flex items-center justify-center transition-all duration-500"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="bg-opacity-40 px-3 sm:px-6 py-3 sm:py-4 rounded-lg text-center max-w-xs sm:max-w-xl lg:max-w-3xl">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight sm:leading-snug">
            {slides[currentSlide].title}
            <br />
            {slides[currentSlide].subtitle}
          </h1>
          <button
            onClick={() => router.push(slides[currentSlide].link)}
            className="mt-3 sm:mt-4 bg-transparent border border-white hover:bg-[#01AFEF] text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded transition text-sm sm:text-base"
          >
            {slides[currentSlide].button}
          </button>
        </div>

        {/* Navigasi Slide */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 text-white text-2xl sm:text-3xl bg-black bg-opacity-40 rounded-full px-2 py-1 sm:px-3 sm:py-1 hover:bg-opacity-60"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 text-white text-2xl sm:text-3xl bg-black bg-opacity-40 rounded-full px-2 py-1 sm:px-3 sm:py-1 hover:bg-opacity-60"
        >
          ›
        </button>
      </section>

      {/* Tentang Desa */}
      <section className="bg-[#F8F9FA] py-10 px-4 text-center">
        <h2 className="text-[#01AFEF] font-bold text-xl sm:text-2xl mb-6">
          TENTANG DESA GATTARENG TOA
        </h2>
        <div className="flex justify-center">
          <img
            src={`${baseURL}/desa.jpg`}
            alt="Desa Gattareng Toa"
            className="rounded-lg shadow-lg w-full max-w-md mb-6"
          />
        </div>
        <p className="text-black text-sm sm:text-base max-w-2xl mx-auto text-center mb-4 leading-relaxed">
          Desa Gattareng Toa adalah salah satu desa yang ada di kecamatan
          Marioriwawo, Kabupaten Soppeng, dimana desa ini bertempat di
          perbatasan Soppeng dan Barru tepatnya dijalan poros bulu dua. Desa ini
          pada awalnya bagian dari Desa Gattareng namun semakin berkembangnya
          desa ini maka dengan keluarnya Keputusan Bupati Soppeng Nomor
          34/VI/2003 tanggal 11 Juni 2003 tentang Pembentuka Dua Desa Persiapan
          Dalam Wilayah Kecamatan Marioriwawo dan Kecamatan Liliriaja Kabupaten
          Soppeng maka Desa Gattareng dipecah menjadi dua desa dimana satu desa
          tetap memakai nama Gattareng sedangkan desa yang baru menggunakan nama
          Gattareng Toa.
        </p>
        <p className="text-black text-sm sm:text-base max-w-2xl mx-auto text-center leading-relaxed">
          Penyebab desa baru yang menggunakan nama Gattareng Toa adalah karena
          berdasarkan penulusuran sejarah ternyata di wilayah desa Gattareng Toa
          terdapat pemukiman tertua tepatnya diwilayah perbukitan disisi barat
          desa yang hampir berbatasan dengan Kabupaten Barru. Oleh karena itu,
          desa ini disebut desa Gattareng Toa dimana dalam bahasa bugis "Toa"
          artinya tua.
        </p>
      </section>

      {/* Peta Administratif */}
      <section className="bg-white py-10 px-4 text-center">
        <h2 className="text-[#4AC2AD] font-bold text-xl sm:text-2xl mb-6">
          PETA ADMINISTRATIF DESA
        </h2>
        <div className="flex justify-center">
          <img
            src={`${baseURL}/petaadmin.jpg`}
            alt="Peta Administratif"
            className="shadow-lg rounded-lg w-full max-w-md sm:max-w-2xl"
          />
        </div>
      </section>

      {/* Peta Wisata */}
      <section
        id="peta-wisata"
        className="bg-[#F8F9FA] w-full mx-auto py-10 px-4 sm:px-8 lg:px-16 xl:px-74"
      >
        <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4AC2AD] mb-4 text-center">
            PETA WISATA DESA GATTARENG TOA
          </h2>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1nv22gyILzi0UUSmu-A2ry-PQ1Gv-VH4&ehbc=2E312F"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg sm:h-[400px] lg:h-[500px]"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
