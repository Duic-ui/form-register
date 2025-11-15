import Button from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/hero-bg.jpg";


const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage} 
          alt="Events showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Những Sự Kiện<br />
          <span className="text-secondary">Đáng Nhớ</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90">
          Khám phá hành trình của chúng tôi qua những sự kiện ý nghĩa và kết nối cộng đồng
        </p>
        <Link href="/registration">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-lg shadow-elegant transition-all hover:scale-105"
          >
            Đăng Ký Ngay
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
