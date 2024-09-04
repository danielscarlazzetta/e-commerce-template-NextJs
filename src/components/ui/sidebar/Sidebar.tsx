"use client";

import Link from "next/link";
import { IoBook, IoBookmarks, IoBookOutline, IoBookSharp, IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleCircleOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div>
      {/*BackGround color*/}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30 " />
      {/*BackGround blur*/}
      <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />

      {/*Side menu*/}
      <nav className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ">
        <IoCloseOutline
          size={50}
          className="absolute top-0 right-5 cursor-pointer"
          onClick={() => console.log("click")}
        />

        {/*input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input 
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-2 pr-10 border-b-2 text-sm border-gray-200 focus:outline-none focus:border-blue-500"/>
        </div>

        {/* Menu */}
        <Link href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoPersonOutline size={30}/>
          <span className="ml-3 text-xl">Perfil</span>
        </Link>

        <Link href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoTicketOutline size={30}/>
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

        <Link href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoLogInOutline size={30}/>
          <span className="ml-3 text-xl">Login</span>
        </Link>

        <Link href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoLogOutOutline size={30}/>
          <span className="ml-3 text-xl">Login</span>
        </Link>

        {/* LineSeparator */}
        <div className="w-full mt-10 h-2 bg-gray-200 rounded-lg"/>

        <Link href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoShirtOutline size={30}/>
          <span className="ml-3 text-xl">Productos</span>
        </Link>

        <Link href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoBookOutline size={30}/>
          <span className="ml-3 text-xl">Libros</span>
        </Link>

        <Link href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoTicketOutline size={30}/>
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

        <Link href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
          <IoPeopleOutline size={30}/>
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

      </nav>
    </div>
  );
};
390;
