import { fetchInSanity } from "@/app/utils/sanity.utils";
import Link from "next/link";

import Image from "next/image";
import { Newsletter } from "@/app/@types/data-structure";

export async function NewlettersLinks() {
  const newsletters = await fetchInSanity(
    `*[_type == "newsletter"]{title, slug, _createdAt, news[]->{"image":image.asset->url, title}} | order(_createdAt desc)`
  );

  console.log(newsletters);

  return (
    <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {newsletters.map((newsletter: Newsletter) => (
        <Link
          href={`/newsletters/${newsletter.slug.current}`}
          key={newsletter._createdAt}
          className="block border bg-background shadow-md p-2 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative rounded-md overflow-hidden w-full h-28 bg-gray-200 flex items-center justify-center">
            {newsletter.news[0].image && (
              <Image
                fill
                sizes="100%"
                src={newsletter.news[0].image}
                alt={"Newsletter Cover"}
                className="w-full brightness-75 dark:brightness-90 h-full object-cover rounded-sm border"
              />
            )}
          </div>
          <div className="p-2">
            <h2 className="font-semibold">
              {newsletter.title.replace("Especial ", "")}
            </h2>
            <p className="truncate w-full text-xs text-muted-foreground">
              &quot;{newsletter.news[0].title}...&quot;
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
