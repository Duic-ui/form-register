import Image from "next/image";
import HeroSection from "./components/HomeSection";
import EventsShowcase from "./components/EventsShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <EventsShowcase />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 Events Showcase. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
