import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '30747162-c0f899af5e8792e55f79454a6';

export async function getImagesApi(query, page) {
  const BASE_SEARH_PARAMS = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: page,
    q: query,
    safesearch: true,
  };

  const response = await axios.get(API_URL, {
    params: BASE_SEARH_PARAMS,
  });

  console.log(response);

  return response.data;
}





// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '30747162-c0f899af5e8792e55f79454a6';

// export async function getImagesApi(searchValue, pageNumber) {
//   return await axios
//     .get(
//       `/?key=${API_KEY}&q=${searchValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=12&page=${pageNumber}`
//     )
//     .then(async response => {
//       if (!response.ok) {
//         if (response.status === 404) {
//           return [];
//         }
//         new Error(response.status);
//       }
//       return await response.data;
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }


