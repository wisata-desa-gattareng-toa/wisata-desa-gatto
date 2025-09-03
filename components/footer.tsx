export default function Footer() {
  const lfsBase =
    "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/main/public/icons";

  return (
    <footer className="bg-sky-500 text-white text-center py-6 px-4 sm:px-6">
      {/* Ikon Sosial */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" aria-label="YouTube">
          <img
            src={`${lfsBase}/Youtube.png`}
            className="h-8 w-8 sm:h-6 sm:w-6"
            alt="YouTube"
          />
        </a>
        <a
          href="https://www.instagram.com/kknt114_gattarengtoa"
          aria-label="Instagram"
        >
          <img
            src={`${lfsBase}/Instagram.png`}
            className="h-8 w-8 sm:h-6 sm:w-6"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.tiktok.com/@kknt_desagattarentoa114"
          aria-label="TikTok"
        >
          <img
            src={`${lfsBase}/tiktok.png`}
            className="h-8 w-8 sm:h-6 sm:w-6"
            alt="TikTok"
          />
        </a>
      </div>

      {/* Teks Copyright */}
      <p className="text-xs sm:text-sm leading-relaxed">
        © 2025 KKNT Pemberdayaan Masyarakat Desa Gattareng Toa Gel. 114
        Universitas Hasanuddin
      </p>
    </footer>
  );
}