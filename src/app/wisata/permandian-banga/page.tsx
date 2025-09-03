"use client";
import Image from "next/image";
import Navigasi from "../../../../components/navigasi";
import Footer from "../../../../components/footer";

export default function PermandianBangaPage() {
  const fasilitas = [
    {
      name: "Tempat Parkir",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/parkir.jpg",
    },
    {
      name: "Kamar Mandi",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/kamar-mandi.jpg",
    },
    {
      name: "Gazebo",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/gazebo.jpg",
    },
    {
      name: "Tempat Duduk",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/tempat-duduk.jpg",
    },
    {
      name: "Warung",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/warung.jpg",
    },
    {
      name: "Spot Foto",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/spot-foto.jpg",
    },
  ];

  const galeriFotos = [
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/banga5.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/banga1.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/banga2.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/banga3.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/banga4.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/banga6.jpg",
    },
  ];

  return (
    <>
      <Navigasi />
      <main className="font-sans">
        {/* Hero */}
        <section
          id="hero"
          className="relative h-[300px] sm:h-[560px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/hero.png')",
          }}
        >
          <div className="bg-opacity-50 px-3 sm:px-6 py-2 sm:py-4 rounded-lg">
            <h1 className="pt-15 text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center">
              PERMANDIAN ALAM
              <br />
              BANGA
            </h1>
          </div>
        </section>

        {/* Deskripsi */}
        <section className="bg-white max-w-full mx-auto py-6 sm:py-10 px-6 sm:px-15 md:px-40">
          <div className="text-center bg-[#4AC2AD1F] py-5 sm:py-8 px-4 sm:px-10 md:px-12 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#01AFEF] mb-3">
              DESKRIPSI
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-black leading-relaxed text-justify sm:text-center">
              Permandian Alam Banga berada di lereng Bukit Buludua, Desa
              Gattareng Toa. Airnya berasal langsung dari pegunungan, dingin dan
              jernih, sehingga saat berendam rasanya sangat menyegarkan—mirip
              seperti mandi air es alami. Tempat ini dikelilingi pemandangan
              pegunungan yang hijau dan asri. Udara yang sejuk, suara gemericik
              air, dan suasananya yang tenang membuatnya pas untuk melepas penat
              dan menenangkan pikiran.
            </p>
          </div>
        </section>

        {/* Lokasi */}
        <section className="bg-[#F8F9FA] max-w-full mx-auto py-8 sm:py-12 px-6 sm:px-15 md:px-20">
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4AC2AD] mb-4">
              LOKASI
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5049.532152317146!2d119.81564567596384!3d-4.507572647634153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe194c8f646bff%3A0xbf85160ad4fec901!2sPermandian%20Alam%20Banga!5e1!3m2!1sen!2sid!4v1755068377316!5m2!1sen!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg sm:h-[425px]"
            ></iframe>
          </div>
        </section>

        {/* Sejarah */}
        <section className="max-w-full mx-auto py-8 sm:py-12 px-6 sm:px-15 md:px-40 bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#01AFEF] text-center mb-6">
            SEJARAH
          </h2>
          <div className="bg-[#01afef1c] px-4 sm:px-10 py-6 sm:py-10 rounded-lg text-center text-black">
            <p className="text-xs sm:text-base md:text-lg mb-2">
              Banga (Pigatetta elata) adalah sejenis palma yang tinggi dan indah
              yang tumbuh dan tersebar di wilayah Desa Gattareng Toa. Batang
              yang licin dan lurus digunakan dibuat sebagai bakul sebagal tempat
              barang dan bahkan tikar para orang tua dulu. Tumbuhan ini tumbuh
              di sekitar sumber mata air diperbatasan Kampung Kassi-Gattareng
              Yang kemudian pada perkembangan nya nama pahon ini di ambil
              sebagal nama tempat yaltu Banga. Kampung ini terdapat sumber mata
              air yang luar blasa yang alrnya begitu besar dan menjadi sumber
              air minum dan pengairan. Setelah Desa Gattareng dilakukan
              pemecahan menjadi dua Desa dan lahirlah Desa Gattareng Toa.
            </p>
            <p className="text-xs sm:text-base md:text-lg mb-2">
              Setelah melihat potensi air ini kepala Desa pertama Desa Gattareng
              Toa Bapak Ibrahim S.E.M.M (2003-2008) membangun sebuah kolam yang
              bisa di dialihfungsikan menjadi pemandian untuk bagi masyarakat
              sekitar maupun luar yang kemudian diberi nama "Pemandian Alam
              Banga” yang didirikan pada tahun 2005.
            </p>
            <p className="text-xs sm:text-base md:text-lg">
              Kemudian, pada tahun 2025, permandian ini semakin ramai dikunjungi
              sejak mendapatkan sentuhan perbaikan dan penataan dari para
              mahasiswa KKN-T MBKM Universitas Lamappapoleonro (Unipol) dengan
              bantuan warga sekitar. Mereka melakukan pengecatan ulang,
              memperbaiki fasilitas yang rusak, serta memperindah area
              permandian sehingga tampil lebih menarik dan nyaman bagi
              pengunjung.
            </p>
          </div>
        </section>

        {/* Karcis */}
        <section className="bg-[#F8F9FA] py-8 sm:py-12 px-6 sm:px-15 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4AC2AD] mb-6">
            JAM OPERASIONAL DAN KARCIS
          </h2>
          <div className="flex justify-center">
            <Image
              src="https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/banga/banga.png"
              alt="jam operasional dan karcis"
              width={800}
              height={400}
              className="shadow-lg rounded-lg max-w-full sm:max-w-2xl h-auto"
            />
          </div>
        </section>

        {/* Fasilitas */}
        <section className="max-w-full mx-auto py-8 sm:py-12 px-5 sm:px-8 md:px-20 bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#01AFEF] text-center mb-6 sm:mb-8">
            FASILITAS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 text-black">
            {fasilitas.map((item, i) => (
              <div
                key={i}
                className="bg-[#F8F9FA] rounded-lg shadow hover:shadow-lg overflow-hidden text-center"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-40 sm:h-65 object-cover"
                />
                <p className="font-semibold py-3 text-sm sm:text-base">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Galeri */}
        <section
          id="galeri"
          className="max-w-full mx-auto py-8 sm:py-12 px-4 sm:px-8 md:px-20 bg-[#F8F9FA]"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4AC2AD] text-center mb-6 sm:mb-8">
            GALERI FOTO BANGA
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {galeriFotos.map((foto, i) => (
              <Image
                key={i}
                src={foto.src}
                width={400}
                height={300}
                className="w-full h-36 sm:h-70 object-cover rounded"
                alt={`Galeri Banga ${i + 1}`}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
