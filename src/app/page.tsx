import Navigasi from "../../components/navigasi";
import HomePage from "../../components/homepage";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigasi */}
      <Navigasi />

      {/* Konten Utama */}
      <div className="flex-grow">
        <HomePage />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}