import Link from "next/link";
import Navigasi from "./navigasi";
import Footer from "./footer";

type WisataItem = {
  id: string;
  nama: string;
  gambar: string;
};

export default function GaleriWisataList() {
  const baseURL =
    "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/refs/heads/main/public";

  const wisataAlam: WisataItem[] = [
    {
      id: "permandian-banga",
      nama: "Permandian Banga",
      gambar: `${baseURL}/wisata/permandian-banga.jpg`,
    },
    {
      id: "permandian-lereng",
      nama: "Permandian Lereng Hijau",
      gambar: `${baseURL}/wisata/permandian-lereng.jpg`,
    },
    {
      id: "air-terjun-laposo",
      nama: "Air Terjun Laposo",
      gambar: `${baseURL}/wisata/air-terjun-laposo.png`,
    },
    {
      id: "lembah-laparajo",
      nama: "Lembah Laparaojo",
      gambar: `${baseURL}/wisata/lembah-laparajo.jpg`,
    },
    {
      id: "mt-massimpolongnge",
      nama: "MT. Massimpolongnge",
      gambar: `${baseURL}/wisata/mt-massimpolongnge.jpg`,
    },
    {
      id: "mt-bulu-dua",
      nama: "MT. Bulu Dua",
      gambar: `${baseURL}/wisata/mt-bulu-dua.jpg`,
    },
  ];

  const wisataKuliner: WisataItem[] = [
    {
      id: "bolu-susu",
      nama: "Bolu Susu",
      gambar: `/wisata/bolu-susu.jpeg`,
    },
    {
      id: "dodol-pangi",
      nama: "Dodol Pangi",
      gambar: `${baseURL}/wisata/dodol-pangi.jpg`,
    },
  ];

  return (
    <>
      <Navigasi />

      {/* HERO */}
      <section
        id="hero"
        className="relative h-[560px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${baseURL}/hero.png)` }}
      >
        <div className="bg-opacity-50 px-6 py-4 rounded-lg">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            GALERI WISATA DESA
            <br />
            GATTARENG TOA
          </h1>
        </div>
      </section>

      {/* WISATA ALAM */}
      <section id="wisata-alam" className="bg-gray-100 py-30 xl:px-40 sm:px-20">
        <h2 className="text-center text-3xl font-bold text-[#00BFFF] mb-8">
          WISATA ALAM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {wisataAlam.map((item) => (
            <Link key={item.id} href={`/wisata/${item.id}/#galeri`}>
              <div className="text-black bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-center font-bold">{item.nama}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WISATA KULINER */}
      <section id="wisata-kuliner" className="bg-white py-40 xl:px-80 sm:px-20">
        <h2 className="text-center text-3xl font-bold text-[#40E0D0] mb-8">
          WISATA KULINER
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {wisataKuliner.map((item) => (
            <Link key={item.id} href={`/wisata/${item.id}`}>
              <div className="text-black bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 text-center font-semibold">{item.nama}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}