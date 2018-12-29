export const brandService = {
    getBrandImages,
    getMostPopularBrandsAndImages,
    getBrandInfoAndImages
}

function getBrandInfoAndImages(brandName){
    return fetch(`/api/companies/${brandName}/images`)
        .then(res => res.json())
        .then(data => {return data})
        .catch(err => {throw new Error(err)});
}

function getBrandImages(){

}

function getMostPopularBrandsAndImages(){
    return fetch('/api/companies/top')
        .then(res => res.json())
        .then(data => {return data})
        .catch(err => {throw new Error(err)});
}