import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from '@heroicons/react/24/solid';

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
      <nav className="hidden md:flex space-x-6  font-semibold text-sm text-yellow-700 uppercase items-center">
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
          Liên Hệ
        </Link>
        <a href="tel:+84934348368" className="bg-yellow-600 p-2 rounded-full text-white flex items-center gap-2 text-base">
          <PhoneIcon className="h-5 w-5 text-white" />
          0375515642
        </a>
      </nav>

      <button className="md:hidden text-white">☰</button>
    </header>
  );
} 
