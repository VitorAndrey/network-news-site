"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import { FolderOpenDot, Camera, Users2 } from "lucide-react";

export function SideNavigation() {
  const pathname = usePathname();

  return (
    <aside className="w-80 md:flex hidden">
      <nav className="px-4 py-6 w-full space-y-8">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold px-4 mb-2">Apresentação</h3>

          <Link href="/">
            <Button
              className="w-full justify-start"
              variant={pathname === "/" ? "secondary" : "ghost"}
            >
              <Users2 className="w-4 mr-2" /> Boas vindas
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold px-4 mb-2">Descubra</h3>

          <Link href="/about">
            <Button
              className="w-full justify-start"
              variant={pathname === "/about" ? "secondary" : "ghost"}
            >
              <Users2 className="w-4 mr-2" /> Sobre nós
            </Button>
          </Link>

          <Link href="/projects">
            <Button
              className="w-full justify-start"
              variant={pathname === "/projects" ? "secondary" : "ghost"}
            >
              <FolderOpenDot className="w-4 mr-2" /> Projetos
            </Button>
          </Link>

          <Link href="/galery">
            <Button
              className="w-full justify-start"
              variant={pathname === "/galery" ? "secondary" : "ghost"}
            >
              <Camera className="w-4 mr-2" /> Galeria
            </Button>
          </Link>
        </div>
      </nav>
      <Separator orientation="vertical" className="content-height" />
    </aside>
  );
}
