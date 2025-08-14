"use client";
import Image from "next/image";
import Navigasi from "../../../../components/navigasi";
import Footer from "../../../../components/footer";

export default function DodolPangiPage() {
  const hargaItems = [
    {
      name: "ISI 6 BIJI",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/pangi/6biji.jpg",
      price: "Rp 10.000",
    },
    {
      name: "ISI 12 BIJI",
      img: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/pangi/12biji.jpg",
      price: "Rp 20.000",
    },
  ];

  const galeriFotos = [
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/pangi/pangi1.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/pangi/pangi2.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/pangi/pangi3.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/pangi/pangi4.png",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/pangi/pangi5.jpg",
    },
    {
      src: "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/pangi/pangi6.jpg",
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
              "url('https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public/wisata/dodol-pangi.png')",
          }}
        >
          <div className="bg-opacity-50 px-6 py-4 rounded-lg">
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
              DODOL PANGI
            </h1>
          </div>
        </section>

        {/* Deskripsi & Lokasi */}
        <section className="bg-white max-w-full mx-auto py-12 px-15 md:px-40 grid md:grid-cols-2 gap-8 items-center">
          {/* Deskripsi */}
          <div className="text-center bg-[#4AC2AD1F] py-10 px-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-[#01AFEF] mb-4">
              DESKRIPSI
            </h2>
            <p className="text-black leading-relaxed text-center">
              Dodol Pangi adalah salah satu oleh-oleh khas Kabupaten Soppeng
              yang bisa kamu temui di Desa Gattareng Toa. Resmi menjadi kuliner
              khas desa sejak 2023, dodol ini dibuat oleh pelaku UKM lokal dari
              bahan pangi muda (kluwek), tepung ketan, gula merah, dan mentega.
              Proses memasaknya memakan waktu 7–8 jam hingga menghasilkan dodol
              bertekstur kenyal, rasa manis legit, dan aroma khas yang menggugah
              selera.
            </p>
            <p className="text-black leading-relaxed text-center">
              Produk yang paling terkenal adalah Dodol Pangi Bukit Sejuk, yang
              sudah ada sejak 2010 dan memiliki sertifikat halal. Dodol ini
              tahan hingga tiga minggu, sehingga cocok dijadikan oleh-oleh.
              Dodol Pangi Bukit Sejuk ini bisa Anda temukan di toko oleh-oleh
              dan di toko brownies Amanda. Menikmati Dodol Pangi bukan hanya
              soal rasa, tetapi juga menghargai warisan kuliner yang dibuat
              dengan ketelatenan dan cinta oleh masyarakat Gattareng Toa.
            </p>
          </div>

          {/* Lokasi */}
          <div className="bg-[#01afef1c] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-[#4AC2AD] mb-4">LOKASI</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7954.920280800442!2d119.79450879357911!3d-4.510767999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMzAnMzguOCJTIDExOcKwNDgnMTQuNSJF!5e0!3m2!1sid!2sid!4v1755086404717!5m2!1sid!2sid"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </section>

        {/* Bahan & Pembuatan */}
        <section className="bg-[#F8F9FA] max-w-full mx-auto py-12 px-15 md:px-40 flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Bahan */}
          <div className="text-center bg-[#01afef1c] py-6 px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 sm:w-[340px] md:w-[340px] md:h-[340px]">
            <h2 className="text-3xl font-bold text-[#4AC2AD] mb-2">BAHAN</h2>
            <ul className="text-black leading-relaxed text-left list-disc list-inside pl-10">
              <li>Pangi yang masih muda</li>
              <li>Gula merah</li>
              <li>Tepung ketan</li>
              <li>Tepung terigu</li>
              <li>Susu bubuk</li>
              <li>Vanili</li>
              <li>Cokelat bubuk Van Houten</li>
              <li>Gula pasir</li>
              <li>Minyak goreng</li>
              <li>Mentega</li>
            </ul>
          </div>

          {/* Cara Membuat */}
          <div className="bg-[#4AC2AD1F] py-6 px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full md:w-[600px] md:h-[340px]">
            <h2 className="text-3xl font-bold text-[#01AFEF] mb-2 text-center">
              CARA MEMBUAT
            </h2>
            <ol className="list-decimal list-inside text-black leading-relaxed space-y-1 pl-10">
              <li>Cincang halus pangi muda lalu rebus hingga empuk.</li>
              <li>Masak gula merah dengan air, saring kotorannya.</li>
              <li>
                Campur tepung ketan, terigu, susu, vanili, dan cokelat bubuk.
              </li>
              <li>Masukkan air gula merah, masak setengah matang.</li>
              <li>Masukkan pangi rebus dan gula pasir ke adonan.</li>
              <li>Setelah 1 jam aduk, tambahkan minyak goreng.</li>
              <li>Setelah 2 jam, masukkan mentega.</li>
              <li>Masak 3–4 jam hingga matang.</li>
            </ol>
          </div>
        </section>

        {/* Harga */}
        <section className="max-w-full mx-auto py-12 px-4 bg-white">
          <h2 className="text-3xl font-bold text-[#4AC2AD] text-center mb-8">
            HARGA
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 text-black sm:px-10 md:px-80 justify-center">
            {hargaItems.map((item, i) => (
              <div
                key={i}
                className="bg-[#F8F9FA] rounded-lg shadow hover:shadow-lg overflow-hidden text-center flex flex-col"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-50 object-cover"
                />
                <p className="font-semibold py-3">{item.name}</p>
                <p className="text-lg font-bold text-[#4AC2AD]">{item.price}</p>

                <a
                  href={`https://wa.me/6285277155118?text=Halo%20saya%20ingin%20pesan%20dodol%20pangi%20${encodeURIComponent(
                    item.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 mb-4 mx-15 inline-block bg-[#4AC2AD] text-white px-4 py-2 rounded-lg shadow hover:bg-[#3AA495] transition"
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
          className="max-w-full mx-auto py-12 px-4 bg-[#F8F9FA]"
        >
          <h2 className="text-3xl font-bold text-[#01AFEF] text-center mb-8">
            GALERI FOTO DODOL PANGI
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:px-10 md:px-30">
            {galeriFotos.map((foto, i) => (
              <Image
                key={i}
                src={foto.src}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded"
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