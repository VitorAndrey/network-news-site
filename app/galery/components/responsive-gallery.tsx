"use client";

import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Asset } from "../page";

type ResponsiveGalleryProps = {
  assets: Asset[] | null;
};

export function ResponsiveGallery({ assets }: ResponsiveGalleryProps) {
  return (
    <section className="p-8">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 426: 2, 900: 3, 1220: 4, 2000: 5 }}
      >
        <Masonry gutter="1rem">
          {assets ? (
            assets.map((item, i) => (
              <>
                {item.type === "image" && (
                  <Image
                    key={i}
                    src={item.asset}
                    width={300}
                    height={200}
                    style={{ width: "100%", display: "block" }}
                    alt="Gallery Image"
                    className="rounded-lg"
                  />
                )}
                {item.type === "video" && (
                  <video
                    loop
                    autoPlay
                    muted
                    style={{ width: "100%", display: "block" }}
                  >
                    <source src={item.asset} type="video/mp4" />
                  </video>
                )}
              </>
            ))
          ) : (
            <p>Galeria Vazia</p>
          )}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
