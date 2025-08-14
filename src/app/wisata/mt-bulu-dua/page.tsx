"use client";
import Image from "next/image";
import Navigasi from "../../../../components/navigasi";
import Footer from "../../../../components/footer";

export default function BuluDuaPage() {
  const galeriFotos = [
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/wisata/mt-bulu-dua.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldua1.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldua2.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldua4.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldua5.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldua6.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldua7.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldu14.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldua10.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldua11.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldu12.png",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/buldu13.png",
    },
  ];

  return (
    <>
      <main className="font-sans">
        <Navigasi />

        {/* Hero */}
        <section
          id="hero"
          className="relative h-[560px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/wisata/mt-massimpolongnge.png')",
          }}
        >
          <div className="bg-opacity-50 px-6 py-4 rounded-lg">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center justify-center">
              MT BULU DUA
            </h1>
          </div>
        </section>

        {/* Deskripsi */}
        <section className="bg-white max-w-full mx-auto py-12 sm:px-15 md:px-50">
          <div className="text-center bg-[#4AC2AD1F] py-10 sm:px-10 md:px-25 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-[#01AFEF] mb-4">
              DESKRIPSI
            </h2>
            <p className="text-black leading-relaxed text-center">
              MT Bulu Dua adalah salah satu gunung yang ada di Desa Gattareng
              Toa, Kecamatan Marioriwawo, Kabupaten Soppeng tepatnya di
              Panrokoe. Gunung ini memiliki ketinggian 920 meter di atas
              permukaan laut (mdpl). Gunung ini memiliki dua jalur yaitu melalui
              Barru dan melalui Soppeng, dan untuk jalur Soppeng kita harus
              melalui 3 pos.
            </p>
            <p className="pt-3 text-black leading-relaxed text-center">
              Jalur pendakiannya beragam, mulai dari jalan setapak yang landai
              hingga tanjakan curam berbatu. Perjalanan menuju puncak melewati
              hamparan hutan, udara sejuk, dan suara alam yang menenangkan.
              Sesampainya di puncak, pendaki akan disambut panorama luas:
              hamparan perbukitan, awan tipis yang menari di langit, dan
              pemandangan desa-desa di kejauhan yang membuat rasa lelah langsung
              terbayar lunas.
            </p>
            <p className="pt-3 text-black leading-relaxed text-center">
              Nama Bulu Dua berasal dari bahasa Bugis, di mana "bulu" berarti
              gunung atau bukit, dan "dua" berarti angka dua. Penamaan ini
              kemungkinan merujuk pada bentuk gunungnya yang memiliki dua puncak
              berdekatan, seakan menjadi sepasang penjaga alam Desa Gattareng
              Toa. Bentuknya yang khas membuatnya mudah dikenali dari kejauhan.
            </p>
            <p className="pt-3 text-black leading-relaxed text-center">
              Jalur melalui Soppeng ini dibuka secara resmi sejak tahun 2025
              setelah dilakukan pembukaan jalur oleh mahasiswa KKN Gel. 114
              Unhas bersama pemuda desa yaitu Bolang Bulu Dua, dengan pemasangan
              penanda jalur, titik istirahat, dan papan informasi. Kini
              pendakian ke Bulu Dua menjadi lebih mudah, aman, dan menyenangkan.
              Bulu Dua bukan hanya sekadar destinasi, tetapi juga simbol
              keindahan dan kekuatan alam Soppeng yang layak dijaga bersama.
            </p>
          </div>
        </section>

        {/* Lokasi & Peta Jalur */}
        <section className="bg-[#F8F9FA] max-w-full mx-auto py-12 px-15 md:px-40 grid md:grid-cols-2 gap-8 items-start">
          {/* Lokasi */}
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-[#4AC2AD] mb-4 text-center">
              LOKASI POS REGIST (BASECAMP)
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7954.910871137934!2d119.78822679357911!3d-4.511626999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMzAnNDEuOSJTIDExOcKwNDcnNTEuOSJF!5e0!3m2!1sid!2sid!4v1755076986802!5m2!1sid!2sid"
              width="100%"
              height="365"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Peta Jalur */}
          <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#4AC2AD] mb-4 text-center">
              PETA JALUR
              <br />
              MT. BULU DUA
            </h2>
            <img
              src="https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/peta-buldu.jpg"
              alt="Peta Jalur"
              className="shadow-lg rounded-lg w-full"
            />
          </div>
        </section>

        {/* Jadwal & Peraturan */}
        <section className="bg-white max-w-full mx-auto py-12 px-15 md:px-40 grid md:grid-cols-2 gap-8 items-start">
          {/* Jadwal */}
          <div className="p-6 bg-[#F8F9FA] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#01AFEF] mb-4 text-center">
              JADWAL DAN PERATURAN MENDAKI
            </h2>
            <img
              src="https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/buldu/perbul.png"
              alt="Peraturan"
              className="shadow-lg rounded-lg w-full"
            />
          </div>

          {/* Lokasi Masuk */}
          <div className="p-6 bg-[#F8F9FA] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-[#01AFEF] mb-4 text-center">
              LOKASI MASUK GUNUNG
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7954.910871137934!2d119.78822679357911!3d-4.511626999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMzAnNDEuOSJTIDExOcKwNDcnNTEuOSJF!5e0!3m2!1sid!2sid!4v1755076986802!5m2!1sid!2sid"
              width="100%"
              height="365"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </section>

        {/* Galeri */}
        <section
          id="galeri"
          className="max-w-full mx-auto py-12 px-4 bg-[#F8F9FA]"
        >
          <h2 className="text-3xl font-bold text-[#4AC2AD] text-center mb-8">
            GALERI FOTO MT BULU DUA
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:px-10 md:px-30">
            {galeriFotos.map((foto, i) => (
              <Image
                key={i}
                src={foto.src}
                width={400}
                height={300}
                className="w-full h-70 object-cover rounded"
                alt=""
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}