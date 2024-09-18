import React from "react";
import ImageGallery from "react-image-gallery";

let images: {original: string, thumbnail: string}[] = [];

let baseUrl = `${process.env.REACT_APP_HOSTNAME}/images/spain/09-14-2024_hernio`;

for (let i = 1; i <= 50; i++) {
    images.push({
        original: `${baseUrl}/${i}.jpg`,
        thumbnail: `${baseUrl}/${i}.jpg`
    });
}

export default function HernioImageGallery() {
    return (
        <ImageGallery items={images} />
    )
  }