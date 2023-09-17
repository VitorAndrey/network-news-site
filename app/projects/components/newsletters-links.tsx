import { fetchInSanity } from "@/app/utils/sanity.utils";

import Link from "next/link";
import { Button } from "../../../components/ui/button";

import { NewsletterHeader } from "@/app/@types/data-structure";

export async function NewlettersLinks() {
  const newsletters = await fetchInSanity(
    `*[_type == "newsletter"]{title, slug, _createdAt} | order(_createdAt desc)`
  );

  return (
    <div className="pt-8 flex gap-2 flex-wrap">
      {newsletters.map((newsletter: NewsletterHeader) => (
        <Link
          href={`/newsletters/${newsletter.slug.current}`}
          key={newsletter._createdAt}
        >
          <Button variant="outline">{newsletter.title}</Button>
        </Link>
      ))}
    </div>
  );
}
