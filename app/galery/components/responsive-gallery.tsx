"use client";

import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export function ResponsiveGallery() {
  const images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",
  ];

  return (
    <section className="p-8">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 550: 2, 900: 3 }}>
        <Masonry gutter="1rem">
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              width={300}
              height={200}
              style={{ width: "100%", display: "block" }}
              alt=""
              className="rounded-lg"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
