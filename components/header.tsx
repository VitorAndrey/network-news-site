import Link from "next/link";

import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";
import { DrawerMenu } from "./drawer-menu";

export function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center h-16 px-5">
        <h1 className="text-xl font-bold">network news</h1>

        <div className="items-center gap-4 md:flex hidden">
          <h3 className="text-xs text-muted-foreground">
            Feito com 💙 por{" "}
            <Link
              href="mailto:tecinformatica135.139@gmail.com"
              className="underline"
            >
              TecInfo135.139
            </Link>
          </h3>

          <Separator orientation="vertical" className="h-6" />

          <Link
            href="https://github.com/VitorAndrey/network-news-site"
            target="_blank"
          >
            <Button variant="outline" className="flex items-center gap-1">
              <Github className="w-4" />
              GitHub
            </Button>
          </Link>

          <ModeToggle />
        </div>

        <div className="md:hidden block">
          <DrawerMenu />
        </div>
      </nav>
      <Separator />
    </header>
  );
}
