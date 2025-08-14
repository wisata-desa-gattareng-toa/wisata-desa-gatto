export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white text-center py-6">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" aria-label="YouTube">
          <img src="/icons/Youtube.png" className="h-6 w-6" alt="YouTube" />
        </a>
        <a href="#" aria-label="Facebook">
          <img src="/icons/facebook.png" className="h-6 w-6" alt="Facebook" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src="/icons/instagram.png" className="h-6 w-6" alt="Instagram" />
        </a>
        <a href="#" aria-label="TikTok">
          <img src="/icons/tiktok.png" className="h-6 w-6" alt="TikTok" />
        </a>
      </div>
      <p className="text-sm">
        © Copyright 2025 KKNT Pemberdayaan Masyarakat Desa Gattareng Toa Gel.
        114 Universitas Hasanuddin
      </p>
    </footer>
  );
}
