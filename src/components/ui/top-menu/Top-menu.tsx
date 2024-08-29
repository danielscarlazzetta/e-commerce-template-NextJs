import { title_font } from "@/config/fonts";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Link from "next/link";

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/*Logo*/}
      <div>
        <Link href="/">
          <span className={`${title_font.className} antialiased font-bold`}>
            Que leo
          </span>{" "}
          <span> Shop</span>{" "}
        </Link>
      </div>

      {/* Center menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/kids"
        >
          Ninos
        </Link>
      </div>

      {/* search cart menu */}
      <div className="flex items-center ">

        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-6 h-6" />
        </Link>

        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-red-700 text-white">3</span>
            <IoCartOutline className="w-6 h-6" />
          </div>
        </Link>

        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 mx-2">
          Menu
        </button>

      </div>
    </nav>
  );
};
