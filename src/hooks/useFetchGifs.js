import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (categoria) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getGifs1=async()=>{
        await getGifs(categoria).then(data=>{
            setImages(data);
            setisLoading(false);
          });
    }

    useEffect(()=>{
      getGifs1();
    },[categoria]);
  
    return {
    images:images,
    isLoading
  }
}
