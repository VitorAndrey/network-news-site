import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="section flex items-center justify-center flex-col gap-10">
      <h1>Seja bem vindo ao network news! 👋</h1>

      <Link href="/projects">
        <Button>Ver Projetos</Button>
      </Link>
    </section>
  );
}
