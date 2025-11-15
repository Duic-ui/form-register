"use client";

import { useRouter } from "next/navigation";
import MultiStepForm from "@/app/components/client/MultiStepForm";
import BackgroundSlider from "@/app/components/client/BackgroundSlider";

const images = ["/phoenix.jpg", "/phoenix1.jpg", "/phoenix2.jpg"];

const RegistrationPage = () => {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Đăng ký thành công! Cảm ơn bạn đã đăng ký.");
        router.push("/");
      } else {
        alert("Có lỗi xảy ra! Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Không thể kết nối đến server!");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with Slider */}
      <BackgroundSlider images={images} interval={5000} />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen py-12 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Form */}
          <MultiStepForm onSubmit={handleSubmit} />

          {/* Back Link */}
          <div className="text-center mt-8">
            <button
              onClick={() => router.push("/")}
              className="text-white hover:text-yellow-300 font-semibold transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              ← Quay về trang chủ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
