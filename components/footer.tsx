export default function Footer() {
  const lfsBase =
    "https://media.githubusercontent.com/media/wisata-desa-gattareng-toa/wisata-desa-gatto/main/public/icons";

  return (
    <footer className="bg-sky-500 text-white text-center py-6">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" aria-label="YouTube">
          <img
            src={`${lfsBase}/Youtube.png`}
            className="h-6 w-6"
            alt="YouTube"
          />
        </a>
        <a href="#" aria-label="Facebook">
          <img
            src={`${lfsBase}/facebook.png`}
            className="h-6 w-6"
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/kknt114_gattarengtoa"
          aria-label="Instagram"
        >
          <img
            src={`${lfsBase}/instagram.png`}
            className="h-6 w-6"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.tiktok.com/@kknt_desagattarentoa114"
          aria-label="TikTok"
        >
          <img src={`${lfsBase}/tiktok.png`} className="h-6 w-6" alt="TikTok" />
        </a>
      </div>
      <p className="text-sm">
        © Copyright 2025 KKNT Pemberdayaan Masyarakat Desa Gattareng Toa Gel.
        114 Universitas Hasanuddin
      </p>
    </footer>
  );
}