import { createHashRouter } from "react-router-dom";
import ImagesGallery from "./components/images-gallery";

const baseUrl = process.env.REACT_APP_HOSTNAME_PROD;

const router = createHashRouter([
    {
      path: "/",
      element:"",
    },
    {
      path: "/deployments/spain/09-02-2024/flight/image-gallery",
      element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-02-2024_arrival/flight`} numImages={8}/>
    },
    {
        path: "/deployments/spain/09-02-2024/city/image-gallery",
        element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-02-2024_arrival/city`} numImages={7}/>
    },
    {
        path: "/deployments/spain/09-07-2024/beach/image-gallery",
        element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-07-2024_beach`} numImages={5}/>
    }, 
    {
        path: "/deployments/spain/09-11-2024/soccer/image-gallery",
        element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-11-2024_soccer`} numImages={4}/>
    }
  ]);

export default router;