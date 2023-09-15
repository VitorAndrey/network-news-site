import Link from "next/link";
import Image from "next/image";

import { PortableText } from "@portabletext/react";

import { News } from "./News";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/app/@types/data-structure";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ArrowLeft } from "lucide-react";

type NewsletterProps = {
  newsletter: Newsletter;
};

export function Newsletter({ newsletter }: NewsletterProps) {
  const { title, Introduction, footer, cover, news } = newsletter;

  return (
    <ScrollArea className="newsletter relative">
      <Link
        href="/projects"
        className="lg:absolute lg:block hidden top-6 left-6"
      >
        <Button variant="link">
          <ArrowLeft className="hover:scale-[1.02] transition" />
        </Button>
      </Link>

      <Link href="/projects" className="absolute lg:hidden bottom-6 right-6">
        <Button className="rounded-full">
          <ArrowLeft className="hover:scale-[1.02] transition" />
        </Button>
      </Link>

      <section className="w-[95%] max-w-[500px] mx-auto flex flex-col gap-8 pb-10">
        <Image
          src={cover.image}
          alt="coverImage"
          width={500}
          height={300}
          className="w-full h-auto"
        />

        <h2 className="text-3xl">{title}</h2>

        <PortableText value={Introduction} />

        <article>
          {news.map((news, index) => (
            <News newsInfo={news} key={index} />
          ))}
        </article>

        <footer className="space-y-8">
          <h2 className="text-2xl">{footer.title}</h2>
          <PortableText value={footer.content} />
        </footer>
      </section>
    </ScrollArea>
  );
}
