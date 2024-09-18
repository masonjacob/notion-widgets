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
    }
  ]);

export default router;