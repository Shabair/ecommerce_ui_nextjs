import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Bell, Home, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* Left */}
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/logo.png"}
          alt="Ecommerce"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          ECOMMERCE
        </p>
      </Link>
      {/* Right */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href={"/"}><Home className="w-4 h-4 text-gray-600" /></Link>
        <Link href={"/"}><Bell className="w-4 h-4 text-gray-600" /></Link>
        <Link href={"/"}><ShoppingBag className="w-4 h-4 text-gray-600" /></Link>
        <Link href={"/"} className="text-gray-600">Sign in</Link>
      </div>
    </nav>
  );
}