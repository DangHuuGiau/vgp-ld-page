"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/landscape/tien-ich-1-update.png",
  "/images/landscape/tien-ich-2-update.png",
  "/images/landscape/tien-ich-3-update.png",
];
export default function LandscapeUtilities() {
  return (
    <section id="landscape-utilities">
      <div className="md:px-52">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-left">
              <h2 className="text-xl font-bold text-green-700 underline">
                ĐẶC QUYỀN DÀNH RIÊNG CƯ DÂN
              </h2>
              <p className="text-gray-700 text-xs mb-4">
                Đặc quyền lớn nhất của cư dân Vinhomes Grand Park có thể nói
                chính là sở hữu tổ ấm trong một đại đô thị “đáng sống”. Đáng
                sống ở đây không chỉ dừng lại ở việc đáp ứng đầy đủ các nhu cầu
                của cư dân từ giáo dục, y tế, mua sắm, vui chơi giải trí,... mà
                luôn đảm bảo chất lượng cuộc sống cư dân luôn ở mức cao.
              </p>
              <p className="text-gray-700 text-xs mb-4">
                Anh/chị sẽ không tìm đâu 1 căn chung cư tại Thủ Đức có hệ tiện
                ích đẳng cấp như Vinhomes Grand Park. Ngay bên cạnh nhà của cư
                dân là hệ thống tiện ích đa dạng tiêu chuẩn quốc tế đến từ Tập
                đoàn Vingroup:
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/living/dac-quyen-vgp.webp"
                alt="Vinhomes Grand Park Overview"
                width={300}
                height={300}
                className=" w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full max-w-3xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              className="rounded-2xl"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`Slide ${i}`}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="text-gray-700 text-xs mb-4">
            Cùng đầy đủ các tiện ích ngay bên trong từng phân khu như hồ bơi,
            công viên nội khu, gym, spa, nhà trẻ, phòng sinh hoạt cộng đồng, sân
            tập thể thao, BBQ,...
          </p>
        </div>
      </div>
    </section>
  );
}
