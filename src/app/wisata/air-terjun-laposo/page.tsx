"use client";
import Image from "next/image";
import Navigasi from "../../../../components/navigasi";
import Footer from "../../../../components/footer";

export default function AirTerjunLaposoPage() {
  const galeriFotos = [
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/laposo/laposo4.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/laposo/laposo7.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/laposo/laposo1.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/laposo/laposo2.png",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/laposo/laposo5.png",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/laposo/laposo6.png",
    },
  ];

  return (
    <>
      <main className="font-sans">
        <Navigasi />

        {/* Hero */}
        <section
          id="hero"
          className="relative h-[300px] sm:h-[560px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/wisata/air-terjun-laposo.png')",
          }}
        >
          <div className="bg-opacity-50 px-4 sm:px-6 py-2 sm:py-4 rounded-lg">
            <h1 className="pt-15 text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center">
              AIR TERJUN LAPOSO
            </h1>
          </div>
        </section>

        {/* Deskripsi & Lokasi */}
        <section className="bg-white max-w-full mx-auto py-6 sm:py-12 px-6 sm:px-12 md:px-40 grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
          {/* Deskripsi */}
          <div className="text-center bg-[#4AC2AD1F] py-6 sm:py-10 px-4 sm:px-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#01AFEF] mb-4">
              DESKRIPSI DAN SEJARAH
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-black leading-relaxed text-justify sm:text-center">
              Air Terjun Laposo terletak di Bulu Dua, Desa Gattareng Toa,
              Kecamatan Marioriwawo. Untuk sampai ke air terjun ini, anda harus
              mendaki gunung MT. Massimpolongnge sejauh kurang lebih 885M. Air
              terjun ini memiliki ketinggian kurang lebih 1.700 mdpl. Air terjun
              ini diberi nama Laposo karena berasal dari gunung Laposo.
            </p>
            <p className="pt-2 text-xs sm:text-base md:text-lg text-black leading-relaxed text-justify sm:text-center">
              Selain itu, secara bahasa, nama Laposo sendiri diambil dari bahasa
              Bugis yaitu "La Poso" yang artinya sesak nafas. Hal ini
              dikarenakan, untuk mencapai air terjun tersebut anda akan
              dihadapkan oleh medan penuh rintangan yang membuat sesak nafas.
              Namun hal itu akan terbayar dengan keindahan air terjun dengan dua
              aliran besar yang jatuh dari ketinggian gunung di antara
              perpohonan hijau.
            </p>
          </div>

          {/* Lokasi */}
          <div className="bg-[#F8F9FA] p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4AC2AD] mb-4 text-center">
              LOKASI POS REGIST (BASECAMP)
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7954.910871137934!2d119.78822679357911!3d-4.511626999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMzAnNDEuOSJTIDExOcKwNDcnNTEuOSJF!5e0!3m2!1sid!2sid!4v1755076986802!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg sm:h-[345px]"
            ></iframe>
          </div>
        </section>

        {/* Peta Jalur */}
        <section className="bg-[#F8F9FA] py-8 sm:py-10 px-4 sm:px-15 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4AC2AD] mb-6">
            PETA JALUR MT. MASSIMPOLONGNGE
          </h2>
          <div className="flex justify-center">
            <img
              src="https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/laposo/peta-jalur.jpg"
              alt="Peta Jalur"
              className="shadow-lg rounded-lg max-w-2xl w-full"
            />
          </div>
        </section>

        {/* Galeri */}
        <section
          id="galeri"
          className="max-w-full mx-auto py-8 sm:py-12 px-4 sm:px-12 bg-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#01AFEF] text-center mb-6 sm:mb-8">
            GALERI FOTO AIR TERJUN LAPOSO
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {galeriFotos.map((foto, i) => (
              <Image
                key={i}
                src={foto.src}
                width={400}
                height={300}
                className="w-full h-70 sm:h-170 object-cover rounded"
                alt={`Galeri Laposo ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}