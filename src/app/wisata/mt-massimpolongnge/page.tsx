"use client";
import Image from "next/image";
import Navigasi from "../../../../components/navigasi";
import Footer from "../../../../components/footer";

export default function MassimpolongngePage() {
  return (
    <>
      <main className="font-sans">
        <Navigasi />
        {/* Hero */}
        <section
          id="hero"
          className="relative h-[560px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/wisata/mt-massimpolongnge.png')" }}
        >
          <div className="bg-opacity-50 px-6 py-4 rounded-lg">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center justify-center">
              MT MASSIMPOLONGNGE
            </h1>
          </div>
        </section>

        {/* Deskripsi */}
        <section className="bg-white max-w-full mx-auto py-12 sm:px-15 md:px-80">
          <div className="text-center bg-[#4AC2AD1F] py-10 sm:px-10 md:px-25 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-[#01AFEF] mb-4">
              DESKRIPSI
            </h2>
            <p className="text-black leading-relaxed text-center">
              Gunung Massimpolongnge yang berada di kawasan Buludua, Desa
              Gattareng Toa, Kecamatan Marioriwawo, Kabupaten Soppeng adalah
              destinasi alam yang bikin kamu terpukau sejak awal pendakian.
              Terletak di ketinggian sekitar 1.254 meter di atas permukaan laut
              (mdpl), gunung ini menawarkan jalur yang menantang, di mana kita
              akan melewati hutan dan tanjakan berbatu, namun setiap langkah
              memberi sensasi petualangan sejati. Sampai di puncak, kamu
              disuguhi pemandangan luar biasa: kabut tebal yang menyelimuti
              lembah, langit biru, dan suasana pegunungan yang sunyi, bikin lega
              dan takjub sekaligus.
            </p>
            <p className="pt-3 text-black leading-relaxed text-center">
              Jalur gunung ini sudah menjadi wisata sejak lama, kemudian sejak 2024,
              lokasi ini makin teratur berkat mahasiswa KKN Unhas dan pemuda
              desa—yang dikenal dengan Bolang Bulu Dua—yang memasang penanda
              jalur serta tugu puncak. Sekarang pendaki bisa sampai dengan lebih
              mudah dan aman. Massimpolongnge kini bukan hanya soal tantangan,
              tapi juga pengalaman penuh makna dan pesona alam yang sulit
              dilupakan.
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
              PETA JALUR MT. MASSIMPOLONGNGE
            </h2>
            <img
              src="/laposo/peta-jalur.jpg"
              alt="Peta Jalur"
              className="shadow-lg rounded-lg w-full"
            />
          </div>
        </section>

        {/* Lokasi & Peta Jalur */}
        <section className="bg-white max-w-full mx-auto py-12 px-15 md:px-40 grid md:grid-cols-2 gap-8 items-start">
          {/* Peta Jalur */}
          <div className="p-6 bg-[#F8F9FA] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#01AFEF] mb-4 text-center">
              JADWAL DAN PERATURAN MENDAKI
            </h2>
            <img
              src="/massi/permas.png"
              alt="Peraturan"
              className="shadow-lg rounded-lg w-98"
            />
          </div>

          {/* Lokasi */}
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
            GALERI FOTO MT MASSIMPOLONGNGE
          </h2>

          {/* Array foto dengan src & alt berbeda */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:px-10 md:px-30">
            {[
              { src: "/massi/massi1.jpg" },
              { src: "/massi/massi2.jpg" },
              { src: "/massi/massi3.jpg" },
              { src: "/massi/massi4.jpg" },
              { src: "/massi/massi5.jpg" },
              { src: "/massi/massi6.jpg" },
              { src: "/massi/massi7.jpg" },
              { src: "/massi/massi8.jpg" },
              { src: "/massi/massi9.jpg" },
            ].map((foto, i) => (
              <Image
                key={i}
                src={foto.src}
                width={400}
                height={300}
                className="w-full h-70  object-cover rounded"
                alt={""}
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}