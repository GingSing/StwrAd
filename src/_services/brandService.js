export const brandService = {
    getBrandInfo,
    getBrandImages,
    getMostPopularBrandsAndImages
}

function getBrandInfo(name){

}

function getBrandImages(){

}

function getMostPopularBrandsAndImages(){
    return fetch('/api/companies/top')
        .then(res => res.json())
        .then(data => {return data;})
        .catch(err => {throw new Error(err);});
}