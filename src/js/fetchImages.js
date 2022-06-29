import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';


const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 40;
let page = DEFAULT_PAGE;
let per_page = DEFAULT_PER_PAGE;
export const reserPage = () => {
  page = DEFAULT_PAGE;
}

export const fetchImages = (searchImg) => {
  const searchParams = new URLSearchParams({
    key: '28271863-d0d50fdaf1b013fa8dcdf01ae',
    q: searchImg,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page,
  });

  return axios
    .get(`/?${searchParams}`)
    .then(response => {
      console.log(response.data.hits);
      page += 1;
      return {
        images: response.data.hits,
        totalHits: response.data.totalHits,
        isLastPage: page > (response.data.totalHits / per_page),
      }
    })
    .catch(error => console.log(error))
}


  // return fetch(`https://pixabay.com/api/?${searchParams}`).then(res => {
  //   if (res.ok) {
  //     page += 1;
  //     return res.json();
  //   }
  //   throw new Error(res.statusText);
  // }).then(data => {

  //   return {
  //     images: data.hits,
  //     totalHits: data.totalHits,
  //     isLastPage: page > (data.totalHits / per_page),
  //   }
  // }
  // );


