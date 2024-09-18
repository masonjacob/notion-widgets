import React from "react";
import ImageGallery from "react-image-gallery";

export interface ImagesGalleryProps {
    baseUrl: string;
    numImages: number;
}

export default function ImagesGallery(props: ImagesGalleryProps) {
let images: {original: string, thumbnail: string}[] = [];
for (let i = 1; i <= props.numImages; i++) {
    images.push({
        original: `${props.baseUrl}/original/${i}.jpg`,
        thumbnail: `${props.baseUrl}/thumbnail/${i}.jpg`
    });
}
    return (
        <ImageGallery items={images} />
    )
  }