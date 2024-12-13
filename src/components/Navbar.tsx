import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
export default function Navbar() {
  console.log("Navbar mounted");
  const { data: session } = useSession();

  return (
    <nav className="fixed z-50 flex h-auto w-full justify-between border-b bg-background px-12 py-6 text-primary">
      <Link href="/" className="text-4xl font-bold">
        DUOSING
      </Link>
      <ul className="flex lg:flex-row lg:gap-5">
        <li className="font-semibold transition hover:-translate-y-1 hover:text-secondary">
          <Link href="/learn" className="block px-3 py-2">
            Start your learning!!!
          </Link>
        </li>
        <li className="font-semibold transition hover:-translate-y-1 hover:text-secondary">
          <Link href="/translate" className="block px-3 py-2">
            Translate
          </Link>
        </li>
        <li className="font-semibold transition hover:-translate-y-1 hover:text-secondary">
          <a
            href="https://www.agestrad.com/la-lengua-de-senas/"
            className="block px-3 py-2"
          >
            Help
          </a>
        </li>
        <li className="font-semibold transition hover:-translate-y-1 hover:text-secondary">
          <Link href="/express" className="block px-3 py-2">
            Express
          </Link>
        </li>
      </ul>
      <div className="flex gap-4">
        {session ? (
          <div className="flex gap-4 items-center">
            {session.user && <p>Bienvenido, {session.user.name}!</p>}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent >
                <DropdownMenuItem className="cursor-pointer"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link href="/signin">
            <Button>Iniciar sesión</Button>{" "}
          </Link>
        )}
      </div>
    </nav>
  );
}
