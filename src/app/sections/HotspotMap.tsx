import Image from "next/image";

export default function HotspotMap() {
  return (
    <div>
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] text-white flex items-end justify-end shadow-lg">
        <Image
          src="/images/subdivision/hotspot-map.jpg"
          alt="Hotspot Map"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Nội dung nếu có */}
      </div>
      <div className="text-center font-bold font-serif tracking-[0.4em] py-4 uppercase text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-md">
        THE VINHOMES GRAND PARK - NƠI TINH HOA HỘI TỤ
      </div>
    </div>
  );
}
