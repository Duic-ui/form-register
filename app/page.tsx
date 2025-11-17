import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import HomeSection from "./components/HomeSection";
import EventsShowcase from "./components/EventsShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Card className="w-full border-none shadow-none rounded-none">
        <CardContent className="p-0">
          <HomeSection />
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <Card className="w-full border-none shadow-none rounded-none">
        <CardContent className="p-0">
          <EventsShowcase />
        </CardContent>
      </Card>

      <footer className="bg-foreground text-background py-8 mt-auto">
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
