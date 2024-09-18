import React from "react";
import ImageGallery from "react-image-gallery";

let images: {original: string, thumbnail: string}[] = [];

let baseUrl = `${process.env.REACT_APP_HOSTNAME_PROD}/images/spain/09-14-2024_hernio`;

for (let i = 1; i <= 50; i++) {
    images.push({
        original: `${baseUrl}/original/${i}.jpg`,
        thumbnail: `${baseUrl}/thumbnail/${i}.jpg`
    });
}

export default function HernioImageGallery() {
    return (
        <ImageGallery items={images} />
    )
  }