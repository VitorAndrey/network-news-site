import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="section flex items-center justify-center flex-col gap-6 py-20">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Seja bem-vindo ao Network News! 👋
      </h1>
      <p className="text-lg text-center text-gray-700 max-w-2xl">
        Aqui você encontra as últimas novidades, projetos e informações sobre o
        que está acontecendo no mundo da tecnologia. Explore e fique por dentro!
      </p>
      <Link href="/projects">
        <Button>Ver Projetos</Button>
      </Link>
    </section>
  );
}
