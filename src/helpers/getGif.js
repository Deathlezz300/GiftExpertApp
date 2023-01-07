export const getGifs=async(categoria)=>{
    let url;
    if(categoria==='Gifs Variados'){
         url="https://api.giphy.com/v1/gifs/trending?api_key=fUiAv5LxQ2r3fEqitRAszBbcHbE7TMJ5&limit=42";
    }else{
         url=`https://api.giphy.com/v1/gifs/search?api_key=fUiAv5LxQ2r3fEqitRAszBbcHbE7TMJ5&q=${categoria}&limit=42`;
    }
    const response=await fetch(url);
    const {data}=await response.json();

    const gifs=data.map(img=>({
        id:img.id,
        title:img.title,
        img:img.images.original.url
    }));
    return gifs;
}

// export const getGifs=async(Categoria)=>{
//     if(Categoria==='Gifs Variados'){
//         const resp= await fetch("https://api.giphy.com/v1/gifs/trending?api_key=fUiAv5LxQ2r3fEqitRAszBbcHbE7TMJ5&limit=50");
//         const {data}= await resp.json();
//         console.log("variados")
//        return data;
//     }else{
//         const resp= await fetch(`https://api.giphy.com/v1/gifs/search?api_key=fUiAv5LxQ2r3fEqitRAszBbcHbE7TMJ5&q=${Categoria}`);
//        const {data}= await resp.json();
//        console.log("parametro");
//        return data;
//     }
//   }