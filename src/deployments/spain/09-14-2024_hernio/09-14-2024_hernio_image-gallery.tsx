import React from "react";
import ImageGallery from "react-image-gallery";
import image1 from "./images/1.jpg";

console.log(image1);

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];


export default function HernioImageGallery() {
    return (
        <ImageGallery items={images} />
    )
  }