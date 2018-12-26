export const galleryService={
    getProductsForGallery
}

function getProductsForGallery(){
    return fetch('/api/products/')
        .then(res => res.json())
        .then(data => {return data;})
        .catch(err => console.log(err));
        
}