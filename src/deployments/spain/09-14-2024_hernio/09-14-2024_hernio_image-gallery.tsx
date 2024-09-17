import React from "react";
import ImageGallery from "react-image-gallery";

import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import image7 from "./images/7.jpg";
import image8 from "./images/8.jpg";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import image16 from "./images/16.jpg";
import image17 from "./images/17.jpg";
import image18 from "./images/18.jpg";
import image19 from "./images/19.jpg";
import image20 from "./images/20.jpg";
import image21 from "./images/21.jpg";
import image22 from "./images/22.jpg";
import image23 from "./images/23.jpg";
import image24 from "./images/24.jpg";
import image25 from "./images/25.jpg";
import image26 from "./images/26.jpg";
import image27 from "./images/27.jpg";
import image28 from "./images/28.jpg";
import image29 from "./images/29.jpg";
import image30 from "./images/30.jpg";
import image31 from "./images/31.jpg";
import image32 from "./images/32.jpg";
import image33 from "./images/33.jpg";
import image34 from "./images/34.jpg";
import image35 from "./images/35.jpg";
import image36 from "./images/36.jpg";
import image37 from "./images/37.jpg";
import image38 from "./images/38.jpg";
import image39 from "./images/39.jpg";
import image40 from "./images/40.jpg";
import image41 from "./images/41.jpg";
import image42 from "./images/42.jpg";
import image43 from "./images/43.jpg";
import image44 from "./images/44.jpg";
import image45 from "./images/45.jpg";
import image46 from "./images/46.jpg";
import image47 from "./images/47.jpg";
import image48 from "./images/48.jpg";
import image49 from "./images/49.jpg";
import image50 from "./images/50.jpg";

const importedImages = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
  image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
  image31, image32, image33, image34, image35, image36, image37, image38, image39, image40,
  image41, image42, image43, image44, image45, image46, image47, image48, image49, image50
];

const images = importedImages.map(image => ({
  original: image,
  thumbnail: image,
}));

export default function HernioImageGallery() {
    return (
        <ImageGallery items={images} />
    )
  }