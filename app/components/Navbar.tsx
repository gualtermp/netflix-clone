"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

type Link = {
  name: string;
  href: string;
};

const links: Link[] = [
  { name: "Home", href: "/home" },
  { name: "TV Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-5 lg:px-8">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="netflix-logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <li key={`${link.name}-${idx}`}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-white font-semibold underline text-small"
                    : "text-grey-300 font-normal text-small"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursos-pointer" />
        <UserNav />
      </div>
    </div>
  );
}
