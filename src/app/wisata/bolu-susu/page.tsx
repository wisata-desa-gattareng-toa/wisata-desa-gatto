"use client";
import Image from "next/image";
import Navigasi from "../../../../components/navigasi";
import Footer from "../../../../components/footer";

export default function BoluSusuPage() {
  const hargaItems = [
    {
      name: "ISI 12 BIJI",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/bolsu/12pcs.jpg",
      price: "-",
    },
    {
      name: "ISI 20 BIJI",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/bolsu/20pcs.jpg",
      price: "-",
    },
  ];

  const galeriFotos = [
    { src: "/wisata/bolu-susu.jpeg" },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/bolsu/bolsu1.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/bolsu/bolsu2.jpg",
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
              "url('https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/wisata/bolu-susu.png')",
          }}
        >
          <div className="bg-opacity-50 px-4 sm:px-6 py-2 sm:py-4 rounded-lg">
            <h1 className="pt-15 text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center">
              BOLU SUSU
            </h1>
          </div>
        </section>

        {/* Deskripsi & Lokasi */}
        <section className="bg-white max-w-full mx-auto py-6 sm:py-12 px-6 sm:px-12 md:px-40 grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
          {/* Deskripsi */}
          <div className="text-center bg-[#4AC2AD1F] py-6 sm:py-10 px-4 sm:px-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#01AFEF] mb-4">
              DESKRIPSI
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-black leading-relaxed text-justify sm:text-center mb-2">
              Bolu susu adalah salah satu oleh-oleh khas Kabupaten Soppeng yang
              bisa kamu temui di Desa Gattareng Toa. Resmi menjadi kuliner khas
              desa sejak 2023, bolu susu ini dibuat oleh pelaku UKM lokal dari
              bahan utama tepung terigu berkualitas, telur segar, gula, mentega,
              dan susu murni. Perpaduan bahan-bahan tersebut menghasilkan bolu
              yang lembut, beraroma harum, dan memiliki rasa manis gurih khas
              susu.
            </p>
            <p className="text-xs sm:text-base md:text-lg text-black leading-relaxed text-justify sm:text-center mb-2">
              Proses pembuatannya dilakukan secara tradisional namun higienis,
              mulai dari pengadukan adonan hingga pemanggangan dengan suhu yang
              tepat, sehingga bolu tetap empuk meski disimpan beberapa hari.
              Bolu Susu ini memiliki daya simpan hingga 1-2 minggu, sehingga
              cocok dijadikan buah tangan bagi wisatawan yang berkunjung ke
              Soppeng.
            </p>
            <p className="text-xs sm:text-base md:text-lg text-black leading-relaxed text-justify sm:text-center">
              Menikmati Bolu Susu dari Desa Gattareng Toa bukan hanya soal rasa,
              tetapi juga bagian dari pengalaman mengenal cita rasa khas daerah
              yang dibuat dengan ketelatenan dan semangat pelaku UMKM setempat.
            </p>
          </div>

          {/* Lokasi */}
          <div className="bg-[#01afef1c] p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4AC2AD] mb-4">
              LOKASI
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7954.918401670842!2d119.80413575769703!3d-4.51093955716991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe19e28beb5abf%3A0xc66a758505b0cf03!2sBOLU%20SUSU!5e0!3m2!1sid!2sid!4v1755118606334!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg sm:h-[380px]"
            ></iframe>
          </div>
        </section>

        {/* Harga */}
        <section className="max-w-full mx-auto py-8 sm:py-12 px-6 sm:px-12 bg-[#F8F9FA]">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4AC2AD] text-center mb-6 sm:mb-8">
            HARGA
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:gap-10 md:px-40 text-black">
            {hargaItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden text-center flex flex-col"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-36 sm:h-50 object-cover"
                />
                <p className="font-semibold py-3 text-sm sm:text-base">
                  {item.name}
                </p>
                <p className="text-sm sm:text-lg font-bold text-[#4AC2AD]">
                  {item.price}
                </p>

                {/* Tombol Pesan Sekarang */}
                <a
                  href={`https://wa.me/6285299382712?text=Halo%20saya%20ingin%20pesan%20bolu%20susu%20${encodeURIComponent(
                    item.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 mb-4 mx-3 inline-block bg-[#4AC2AD] text-xs text-white px-4 py-2 rounded-lg shadow hover:bg-[#3AA495] transition"
                >
                  Pesan Sekarang
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Galeri */}
        <section
          id="galeri"
          className="max-w-full mx-auto py-8 sm:py-12 px-6 sm:px-12 bg-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#01AFEF] text-center mb-6 sm:mb-8">
            GALERI FOTO BOLU SUSU
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {galeriFotos.map((foto, i) => (
              <Image
                key={i}
                src={foto.src}
                width={400}
                height={300}
                className="w-full h-32 sm:h-60 object-cover rounded"
                alt={`Galeri Bolu Susu ${i + 1}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}