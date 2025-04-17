"use client";
import Image from "next/image";
export default function FloatingButtons() {
  return (
    <div>
      {/* Nút gọi điện */}
      <a
        href="tel:+84934348368"
        className="fixed bottom-4 right-4 bg-green-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition group z-50"
        aria-label="Gọi điện"
      >
        {/* Sóng tỏa */}
        <span className="absolute w-12 h-12 rounded-full bg-green-400 opacity-40 animate-wave z-0"></span>
        <Image
          src="/images/phone.png"
          alt="Gọi điện"
          width={24}
          height={24}
          className="z-10 animate-tilt"
        />
      </a>

      {/* Nút Zalo */}
      <a
        href="https://zalo.me/+84934348368"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition group z-50"
        aria-label="Zalo"
      >
        {/* Sóng tỏa */}
        <span className="absolute w-12 h-12 rounded-full bg-blue-400 opacity-40 animate-wave z-0"></span>
        <Image
          src="/images/zalo.png"
          alt="Zalo"
          width={24}
          height={24}
          className="z-10 animate-tilt"
        />
      </a>
    </div>
  );
}
