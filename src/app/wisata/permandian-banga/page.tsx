"use client";
import Image from "next/image";
import Navigasi from "../../../../components/navigasi";
import Footer from "../../../../components/footer";

export default function PermandianBangaPage() {
  return (
    <>
      <Navigasi />

      <main className="font-sans">
        {/* Hero */}
        <section
          id="hero"
          className="relative h-[560px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/banga/hero.png')" }}
        >
          <div className="bg-opacity-50 px-6 py-4 rounded-lg">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              PERMANDIAN ALAM
              <br />
              BANGA
            </h1>
          </div>
        </section>

        {/* Deskripsi & Lokasi */}
        <section className="bg-white max-w-full mx-auto py-12 px-15 md:px-40 grid md:grid-cols-2 gap-8 items-center">
          {/* Deskripsi */}
          <div className="text-center bg-[#4AC2AD1F] py-10 px-15 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-[#01AFEF] mb-4">
              DESKRIPSI
            </h2>
            <p className="text-black leading-relaxed text-center">
              Permandian Alam Banga berada di lereng Bukit Buludua, Desa
              Gattareng Toa. Airnya berasal langsung dari pegunungan, dingin dan
              jernih, sehingga saat berendam rasanya sangat menyegarkan—mirip
              seperti mandi air es alami. Tempat ini dikelilingi pemandangan
              pegunungan yang hijau dan asri. Udara yang sejuk, suara gemericik
              air, dan suasananya yang tenang membuatnya pas untuk melepas penat
              dan menenangkan pikiran.
            </p>
          </div>

          {/* Lokasi */}
          <div className="bg-[#F8F9FA] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#4AC2AD] mb-4">LOKASI</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5049.532152317146!2d119.81564567596384!3d-4.507572647634153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe194c8f646bff%3A0xbf85160ad4fec901!2sPermandian%20Alam%20Banga!5e1!3m2!1sen!2sid!4v1755068377316!5m2!1sen!2sid"
              width="100%"
              height="225"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </section>

        {/* Sejarah */}
        <section className="max-w-full mx-auto py-12 sm:px-15 md:px-70 bg-[#F8F9FA]">
          <h2 className="text-3xl font-bold text-[#01AFEF] text-center mb-6">
            SEJARAH
          </h2>
          <div className="bg-[#01afef1c] px-15 py-10 rounded-lg text-center text-black">
            <p className="mb-4">
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
            <p className="mb-4">
              Setelah melihat potensi air ini kepala Desa pertama Desa Gattareng
              Toa Bapak Ibrahim S.E.M.M (2003-2008) membangun sebuah kolam yang
              bisa di dialihfungsikan menjadi pemandian untuk bagi masyarakat
              sekitar maupun luar yang kemudian diberi nama "Pemandian Alam
              Banga” yang didirikan pada tahun 2005.
            </p>
            <p>
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

        {/* Karcis dan Jam Operasional */}
        <section className="bg-white py-10 px-15 sm:px-15 text-center">
          <h2 className="text-[#4AC2AD] font-bold text-3xl mb-6">
            JAM OPERASIONAL DAN KARCIS
          </h2>
          <div className="flex justify-center">
            <img
              src="/banga/banga.png"
              alt="jam operasional dan karcis"
              className="shadow-lg rounded-lg max-w-2xl w-140"
            />
          </div>
        </section>

        {/* Fasilitas */}
        <section className="max-w-full mx-auto py-12 px-4 bg-[#F8F9FA]">
          <h2 className="text-3xl font-bold text-[#01AFEF] text-center mb-8">
            FASILITAS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-black sm:px-10 md:px-30">
            {[
              { name: "Tempat Parkir", img: "/banga/parkir.jpg" },
              { name: "Kamar Mandi", img: "/banga/kamar-mandi.jpg" },
              { name: "Gazebo", img: "/banga/gazebo.jpg" },
              {
                name: "Tempat Duduk",
                img: "/banga/tempat-duduk.jpg",
              },
              { name: "Warung", img: "/banga/warung.jpg" },
              { name: "Spot Foto", img: "/banga/spot-foto.jpg" },
            ].map((item, i) => (
              <div
                key={i}
                className=" bg-[#F8F9FA] rounded-lg shadow hover:shadow-lg overflow-hidden text-center"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-50 object-cover"
                />
                <p className="font-semibold py-3">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galeri */}
        <section id="galeri" className="max-w-full mx-auto py-12 px-4 bg-white">
          <h2 className="text-3xl font-bold text-[#4AC2AD] text-center mb-8">
            GALERI FOTO BANGA
          </h2>

          {/* Array foto dengan src & alt berbeda */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:px-10 md:px-30">
            {[
              { src: "/banga/banga5.jpg" },
              { src: "/banga/banga1.jpg" },
              { src: "/banga/banga2.jpg" },
              { src: "/banga/banga3.jpg" },
              { src: "/banga/banga4.jpg" },
              { src: "/banga/banga6.jpg" },
            ].map((foto, i) => (
              <Image
                key={i}
                src={foto.src}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded"
                alt={""}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}