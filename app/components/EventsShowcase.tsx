"use client";

import Image from "next/image";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Workshop Công Nghệ 2024",
    date: "15 tháng 3, 2024",
    description:
      "Một buổi workshop thú vị với hơn 200 người tham gia, nơi chúng tôi chia sẻ kiến thức về công nghệ mới nhất và xu hướng phát triển trong ngành.",
    image: "/phoenix1.jpg",
    category: "Workshop",
  },
  {
    id: 2,
    title: "Hội Thảo Chuyên Đề",
    date: "28 tháng 2, 2024",
    description:
      "Hội thảo chuyên sâu với sự tham gia của các chuyên gia hàng đầu, trao đổi về những thách thức và cơ hội trong thời đại số.",
    image: "/phoenix1.jpg",
    category: "Hội thảo",
  },
  {
    id: 3,
    title: "Sự Kiện Kết Nối",
    date: "10 tháng 1, 2024",
    description:
      "Một buổi tối đầy ý nghĩa với networking session, giúp kết nối cộng đồng và tạo dựng mối quan hệ bền vững.",
    image: "/phoenix1.jpg",
    category: "Networking",
  },
];

const EventsShowcase = () => {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-orange-50 to-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Sự Kiện Của <span className="text-orange-600">Chúng Tôi</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Những khoảnh khắc đáng nhớ và câu chuyện truyền cảm hứng từ các sự
            kiện chúng tôi đã tổ chức
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-linear-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {event.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <p className="text-sm text-orange-600 font-semibold mb-2">
                    {event.date}
                  </p>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsShowcase;
