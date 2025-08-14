"use client";
import Image from "next/image";
import Navigasi from "../../../../components/navigasi";
import Footer from "../../../../components/footer";

export default function LembahLaparajoPage() {
  // Semua link gambar besar pakai GitHub LFS / media.githubusercontent.com
  const galeriFotos = [
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/wisata/lembah-laparajo.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar1.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar2.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar3.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar4.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar12.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar6.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar7.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar8.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar9.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar10.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/lapar5.png",
    },
  ];

  const fasilitas = [
    {
      name: "Tempat Duduk",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/duduk.jpg",
    },
    {
      name: "Spot Foto",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/lapa/nama.jpg",
    },
  ];

  return (
    <>
      <Navigasi />

      <main className="font-sans">
        {/* Hero */}
        <section
          id="hero"
          className="relative h-[560px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/wisata/lembah-laparajo.png')",
          }}
        >
          <div className="bg-opacity-50 px-6 py-4 rounded-lg">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              LEMBAH LAPARAJO
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
              Lembah laparajo adalah salah satu destinasi wisata yang ada di
              desa Gattareng Toa, kec. Marioriwawo, kabupaten Soppeng. Lembah
              Laparajo ini tepatnya berada di perbatasan antara Soppeng dan
              Barru. Lembah ini dekat dengan kaki gunung MT. Massimpolongnge.
              Lembah ini secara resmi masuk sebagai wisata desa sejak 2025,
              setelah dilakukan penataan dan penambahan fasilitas penunjang oleh
              tim KKN Gel. 114 Unhas bersama Bolang Bulu Dua. Sentuhan tersebut
              membuat kawasan ini memiliki identitas yang jelas sebagai
              destinasi wisata, sekaligus menambah daya tarik bagi para
              pengunjung.
            </p>
            <p className="pt-3 text-black leading-relaxed text-center">
              Lembah Laparajo dikelilingi oleh bukit hijau dan pepohonan yang
              rimbun, lembah ini menawarkan pemandangan alam yang menenangkan
              serta udara yang sejuk dan segar. Di Lembah Laparajo, pengunjung
              dapat menikmati berbagai aktivitas, mulai dari trekking ringan,
              piknik bersama keluarga, hingga berburu foto landscape yang
              instagramable. Aliran sungai kecil yang jernih di tengah lembah
              menambah pesona alami tempat ini, serta menjadi spot favorit untuk
              beristirahat sambil menikmati suasana alam.
            </p>
            <p className="pt-3 text-black leading-relaxed text-center">
              Keindahan Lembah Laparajo juga semakin menarik saat matahari
              terbit atau terbenam, ketika cahaya keemasan menyinari lembah dan
              menciptakan panorama yang memukau. Tempat ini cocok dikunjungi
              oleh siapa saja yang ingin melepas penat dari kesibukan kota
              sambil menikmati keindahan alam yang masih asri.
            </p>
          </div>
        </section>

        {/* Lokasi */}
        <section className="bg-[#F8F9FA] max-w-full mx-auto py-12 px-15 md:px-90">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#4AC2AD] mb-4">LOKASI</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d994.3630047859344!2d119.78940126956354!3d-4.512250662768021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMzAnNDQuMSJTIDExOcKwNDcnMjQuMiJF!5e0!3m2!1sid!2sid!4v1755170163419!5m2!1sid!2sid"
              width="100%"
              height="425"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </section>

        {/* Fasilitas */}
        <section className="max-w-full mx-auto py-12 px-4 md:px-30 bg-white">
          <h2 className="text-3xl font-bold text-[#4AC2AD] text-center mb-8">
            FASILITAS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 text-black sm:px-10 md:px-30">
            {fasilitas.map((item, i) => (
              <div
                key={i}
                className=" bg-[#F8F9FA] rounded-lg shadow hover:shadow-lg overflow-hidden text-center"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-65 object-cover"
                />
                <p className="font-semibold py-3">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galeri */}
        <section
          id="galeri"
          className="max-w-full mx-auto py-12 px-4 bg-[#F8F9FA]"
        >
          <h2 className="text-3xl font-bold text-[#4AC2AD] text-center mb-8">
            GALERI FOTO LEMBAH LAPARAJO
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
      </main>

      <Footer />
    </>
  );
}