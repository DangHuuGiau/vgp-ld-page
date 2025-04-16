import Image from "next/image";
import Link from "next/link";
// Replace with the actual logo file path

export default function Header() {
  return (
    <header className="bg-zinc-50 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={"/images/vinhomes-gp-logo.png"}
          alt="Vinhomes Grand Park Logo"
          width={70}
          height={70}
        />
        <div className="flex flex-col ml-2">
          <span className="text-sm font-bold text-yellow-700 ml-2 font-sans italic">
            ĐẠI ĐÔ THỊ ĐẲNG CẤP SINGAPORE
          </span>
          <span className="text-xs font-bold text-gray-600 ml-2">
            VÀ HƠN THẾ NỮA
          </span>
        </div>
      </div>
      <nav className="hidden md:flex space-x-4 text-black font-semibold text-sm text-yellow-700">
        <Link href="#overview" className="hover:text-amber-600 hover:underline">
          Tổng quan
        </Link>
        <Link
          href="#subdivision"
          className="hover:text-amber-600 hover:underline"
        >
          Phân khu đang mở bán
        </Link>
        <Link
          href="#landscape-utilities"
          className="hover:text-amber-600 hover:underline"
        >
          Tiện ích
        </Link>
        <Link
          href="#master-plan"
          className="hover:text-amber-600 hover:underline"
        >
          Tổng thể
        </Link>
        <Link href="#contact" className="hover:text-amber-600 hover:underline">
          Tư vấn
        </Link>
      </nav>
      <button className="md:hidden text-white">☰</button>
    </header>
  );
}
