import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { News as NewsType } from "@/app/@types/data-structure";

type NewsProps = {
  newsInfo: NewsType;
};

export function News({ newsInfo }: NewsProps) {
  const { title, image, theme, content, video } = newsInfo;

  return (
    <article className="mt-8 mb-16 space-y-5 news">
      <h2 className="font-semibold">{title}</h2>
      <h3>{theme}</h3>
      {image && (
        <Image
          src={image}
          alt="newsImage"
          width={500}
          height={300}
          className="w-full h-auto"
        />
      )}
      {video && (
        <video controls className="w-full h-auto">
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="spreaded-words space-y-4">
        <PortableText value={content} />
      </div>
    </article>
  );
}
