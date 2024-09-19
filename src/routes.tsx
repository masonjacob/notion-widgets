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
    },
    {
        path: "/deployments/spain/09-14-2024/ascent/image-gallery",
        element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-14-2024_hernio/ascent`} numImages={22}/>
    },
    {
        path: "/deployments/spain/09-14-2024/descent/image-gallery",
        element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-14-2024_hernio/descent`} numImages={3}/>
    },
    {
        path: "/deployments/spain/09-14-2024/lunch/image-gallery",
        element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-14-2024_hernio/lunch`} numImages={6}/>
    },
    {
        path: "/deployments/spain/09-14-2024/market/image-gallery",
        element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-14-2024_hernio/market`} numImages={6}/>
    },
    {
        path: "/deployments/spain/09-14-2024/ridge/image-gallery",
        element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-14-2024_hernio/ridge`} numImages={12}/>
    },
    {
        path: "/deployments/spain/09-14-2024/swim/image-gallery",
        element: <ImagesGallery baseUrl={`${baseUrl}/images/spain/09-14-2024_swim`} numImages={3}/>
    }
  ]);

export default router;