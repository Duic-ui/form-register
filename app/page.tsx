import HomeSection from "./components/HomeSection";
import EventsShowcase from "./components/EventsShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HomeSection />
      <EventsShowcase />

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80 mb-2">
            © 2025 Phoenix House <span className="text-red-600">❤</span>
          </p>
          <p className="text-sm mb-1">
            Fanpage:{" "}
            <a
              href="https://www.facebook.com/phoenixhousefptuhcmc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              The Flaming Chickens
            </a>
          </p>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:BaoCHG@fpt.edu.vn" className="underline">
              BaoCHG@fpt.edu.vn
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
