import { Newsletter } from "./components/Newsletter";
import { fetchInSanity } from "@/app/utils/sanity.utils";

interface ParamsTypes {
  params: {
    slug: string;
  };
}

export default async function NewsLetterSlug({ params }: ParamsTypes) {
  const newsletter = await fetchInSanity(
    `*[_type == "newsletter" && slug.current == "${params.slug}"][0]{
      title,
      Introduction,
      news[]->{"image":image.asset->url,"video":video.asset->url, content, theme, title},
      cover->{"image":cover.asset->url},
      footer->{title, content}
    }
`
  );

  return <Newsletter newsletter={newsletter} />;
}
