"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Camera, FolderOpenDot, Github, Menu, Users2 } from "lucide-react";

import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";

export function DrawerMenu() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="p-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-col gap-5">
          <ModeToggle />
        </SheetHeader>

        <ScrollArea className="flex-1 py-4">
          <nav className="space-y-8">
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
        </ScrollArea>

        <SheetFooter>
          <Link
            href="https://github.com/VitorAndrey/network-news-site"
            target="_blank"
          >
            <Button
              variant="outline"
              className="flex items-center gap-1 mx-auto mb-6"
            >
              <Github className="w-4" />
              GitHub
            </Button>
          </Link>

          <h3 className="text-xs text-muted-foreground text-center">
            Feito com 💙 por{" "}
            <Link
              href="mailto:tecinformatica135.139@gmail.com"
              className="underline"
            >
              TecInfo135.139
            </Link>
          </h3>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
