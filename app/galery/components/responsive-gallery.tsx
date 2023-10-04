"use client";

import { Fragment, useRef, useState } from "react";

import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { v4 as uuidv4 } from "uuid";

// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Asset } from "../page";

type ResponsiveGalleryProps = {
  assets: Asset[] | null;
};

export function ResponsiveGallery({ assets }: ResponsiveGalleryProps) {
  const [data, setData] = useState({ asset: { type: "", url: "" }, i: 0 });
  const openDialog = useRef<HTMLButtonElement | null>(null);

  function handleViewAsset(item: Asset, i: number) {
    setData({ asset: { type: item.type, url: item.asset }, i });

    if (openDialog.current) {
      openDialog.current.click();
    }
  }

  return (
    <section className="p-8">
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          426: 2,
          900: 3,
          1220: 4,
          1700: 5,
          2200: 6,
          2700: 7,
        }}
      >
        <Masonry gutter="1rem">
          {assets ? (
            assets.map((item, i) => (
              <Fragment key={uuidv4()}>
                {item.type === "image" && (
                  <Image
                    key={uuidv4()}
                    src={item.asset}
                    width={300}
                    height={200}
                    style={{ width: "100%", display: "block" }}
                    alt="Gallery Image"
                    className="rounded-lg cursor-pointer"
                    onClick={() => handleViewAsset(item, i)}
                  />
                )}
                {item.type === "video" && (
                  <video
                    key={uuidv4()}
                    className="rounded-lg cursor-pointer"
                    loop
                    autoPlay
                    muted
                    style={{ width: "100%", display: "block" }}
                    onClick={() => handleViewAsset(item, i)}
                  >
                    <source src={item.asset} type="video/mp4" />
                  </video>
                )}
              </Fragment>
            ))
          ) : (
            <p>Galeria Vazia</p>
          )}
        </Masonry>
      </ResponsiveMasonry>

      {/* <Dialog>
        <DialogTrigger ref={openDialog} />
        <DialogContent>
          {data.asset.type === "image" && (
            <Image
              src={data.asset.url}
              width={300}
              height={200}
              alt="Gallery Image"
            />
          )}
          {data.asset.type === "video" && (
            <video className="rounded-lg cursor-pointer" controls>
              <source src={data.asset.url} type="video/mp4" />
            </video>
          )}
        </DialogContent>
      </Dialog> */}
    </section>
  );
}
