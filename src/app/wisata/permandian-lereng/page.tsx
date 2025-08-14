"use client";
import Image from "next/image";
import Navigasi from "../../../../components/navigasi";
import Footer from "../../../../components/footer";

export default function LerengHijauPage() {
  return (
    <>
      <Navigasi />

      <main className="font-sans">
        {/* Hero */}
        <section
          id="hero"
          className="relative h-[560px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/wisata/permandian-lereng.png')" }}
        >
          <div className="bg-opacity-50 px-6 py-4 rounded-lg">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              PERMANDIAN LERENG HIJAU
              <br />
              BULU DUA
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
              Permandian Lereng Hijau, yang terletak di lereng Bukit Bulu Dua,
              Desa Gattareng Toa, Kecamatan Marioriwawo, Kabupaten Soppeng,
              adalah surga alam yang masih terjaga keasriannya. Terletak sangat
              strategis di tepi jalan raya, kolam alami ini mudah diakses dan
              menyajikan pemandangan luar biasa: kombinasi gunung, hutan, kebun,
              sawah, dan air terjun yang memanjakan mata dan hati. Selain itu
              pengunjung juga akan merasakan sejuknya udara di lokasi permandian
              karna dibangun disekitar lereng hijau Lembah Bulu Dua, Soppeng
              yang juga berbatasan dengan Kabupaten Barru.
            </p>
            <p className="pt-3 text-black leading-relaxed text-center">
              Awalnya kawasan ini merupakan kolam ikan dan lahan ternak. Namun,
              berkat inisiatif tiga bersaudara asal Soppeng yang ingin berbagi
              keindahan kampung halaman, mereka mengubahnya menjadi kolam renang
              alami. Kini, kolam ini menyuguhkan air pegunungan yang jernih dan
              sejuk.
            </p>
          </div>

          {/* Lokasi */}
          <div className="bg-[#F8F9FA] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#4AC2AD] mb-4">LOKASI</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7954.931676256596!2d119.79366729357915!3d-4.509727499999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe18650906769f%3A0x66b69ed4286addb6!2sPermandian%20Lereng%20Hijau%20Bulu%20Dua!5e0!3m2!1sid!2sid!4v1755172249709!5m2!1sid!2sid"
              width="100%"
              height="470"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </section>

        {/* Karcis dan Jam Operasional */}
        <section className="bg-[#F8F9FA] py-10 px-15 sm:px-15 text-center">
          <h2 className="text-[#4AC2AD] font-bold text-3xl mb-6">
            JAM OPERASIONAL DAN KARCIS
          </h2>
          <div className="flex justify-center">
            <img
              src="/lehi/lereng.png"
              alt="jam operasional dan karcis"
              className="shadow-lg rounded-lg max-w-2xl w-140"
            />
          </div>
        </section>

        {/* Fasilitas */}
        <section className="max-w-full mx-auto py-12 px-4 bg-white">
          <h2 className="text-3xl font-bold text-[#01AFEF] text-center mb-8">
            FASILITAS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-black sm:px-10 md:px-30">
            {[
              { name: "Tempat Parkir", img: "/lehi/parkir.png" },
              { name: "Kamar Mandi", img: "/lehi/toilet.png" },
              { name: "Gazebo", img: "/lehi/gazebo.png" },
              {
                name: "Tempat Duduk",
                img: "/lehi/tempat-duduk.png",
              },
              { name: "Warung", img: "/lehi/warung.png" },
              { name: "Wahan", img: "/lehi/wahana.png" },
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
        <section
          id="galeri"
          className="max-w-full mx-auto py-12 px-4 bg-[#F8F9FA]"
        >
          <h2 className="text-3xl font-bold text-[#4AC2AD] text-center mb-8">
            GALERI FOTO PERMANDIAN LERENG HIJAU
          </h2>

          {/* Array foto dengan src & alt berbeda */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:px-10 md:px-30">
            {[
              { src: "/wisata/permandian-lereng.jpg" },
              { src: "/lehi/lehi1.jpg" },
              { src: "/lehi/lehi2.png" },
              { src: "/lehi/lehi3.png" },
              { src: "/lehi/lehi4.png" },
              { src: "/lehi/lehi5.png" },
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