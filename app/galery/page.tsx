import { ScrollArea } from "@/components/ui/scroll-area";
import { ResponsiveGallery } from "./components/responsive-gallery";
import { fetchInSanity } from "../utils/sanity.utils";

export type Asset = {
  type: "video" | "image";
  asset: string;
};

export default async function Galery() {
  const assets = await fetchInSanity(`*[_type == 'gallery'] {
    title,
    "mediaUrls": media[].asset->url
  }
  `);

  const formatedAssets = formatAssets(assets[0].mediaUrls);

  function formatAssets(assetsUrls: string[]) {
    if (!assetsUrls) return null;

    let formatedUrl: Asset[] = [];

    assetsUrls.map((asset: string) => {
      const extension = getMediaType(asset);
      if (!extension) return;

      const assetObject: Asset = {
        type: extension,
        asset,
      };

      formatedUrl.push(assetObject);
    });

    return formatedUrl;
  }

  function getMediaType(url: string) {
    const parts = url.split(".");
    const extension = parts.pop()?.toLowerCase();

    if (
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "png" ||
      extension === "gif"
    ) {
      return "image";
    } else if (extension === "mp4") {
      return "video";
    }
    return null;
  }

  return (
    <ScrollArea className="section-no-padding">
      <ResponsiveGallery assets={formatedAssets} />
    </ScrollArea>
  );
}
