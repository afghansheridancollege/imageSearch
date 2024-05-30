const accessKey = "i36-KsbAblV8BvTcasp3QR___OxYdAogno4hHWoK99g";

const searchForm = document.getElementById("searh-form");
const searchBox = document.getElementById("searh-box");
const searchResult = document.getElementById("searh-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword="";
let page=1;

async function searchImages(){
    keyword= searchBox.ariaValue;
    const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';
    
}