import React from "react";
import Link from "next/link";
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
export default function Navbar() {
  console.log("Navbar mounted");

  return (
    <nav className="w-full shadow px-12 h-auto py-6 flex justify-between  text-primary bg-background fixed z-40">
      <Link href="/duosings" className="text-4xl font-bold">DUOSINGS</Link>
      <ul className="flex flex-col lg:flex-row lg:gap-5 ">
        <li className="font-semibold hover:-translate-y-1 hover:text-secondary transition">
          <Link href="/duosings" className="block py-2 px-3 ">
            Home
          </Link>
        </li>
        <li className="font-semibold hover:-translate-y-1 hover:text-secondary transition">
          <Link href="/translate" className="block py-2 px-3 ">
            Translate
          </Link>
        </li>
        <li className="font-semibold hover:-translate-y-1 hover:text-secondary transition">
          <a href="https://www.agestrad.com/la-lengua-de-senas/" className="block py-2 px-3">
            Help
          </a>
        </li>
        <li className="font-semibold hover:-translate-y-1 hover:text-secondary transition">
          <Link href="/express" className="block py-2 px-3">
            Express
          </Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <Link href="/register">
          <Button>Acceder</Button>
        </Link>
      </div>
    </nav>
  );
}
