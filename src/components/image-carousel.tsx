import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


let images: {original: string, thumbnail: string}[] = [];

let baseUrl = `${process.env.REACT_APP_HOSTNAME_PROD}/images/spain/09-14-2024_hernio`;

for (let i = 1; i <= 50; i++) {
    images.push({
        original: `${baseUrl}/original/${i}.jpg`,
        thumbnail: `${baseUrl}/thumbnail/${i}.jpg`
    });
}

const ImageCarousel: React.FC = () => {
    return (
        <Carousel>
            {images.map((image, index) => {
                return (
                    <div key={index}>
                        <img src={image.original} alt="" />
                    </div>
                    )
            })}
        </Carousel>
    );
};

export default ImageCarousel;
