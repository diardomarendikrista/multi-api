const initialState = {
  categories: [
    {
      id: 1,
      name: 'anime',
      image: 'https://image.shutterstock.com/image-vector/anime-eyes-vision-fire-pop-260nw-1550802335.jpg',
      url: 'https://kitsu.io/api/edge/anime/'
    },
    {
      id: 2,
      name: 'batik',
      image: 'https://i.pinimg.com/originals/7e/f6/6f/7ef66f3d4fa49d628969762a73df6cd9.png',
      url: 'https://batikita.herokuapp.com/index.php/batik/all'
    },
    {
      id: 3,
      name: 'country',
      image: 'https://seeklogo.com/images/F/flags-logo-A079B5AF89-seeklogo.com.png',
      url: 'https://restcountries.eu/rest/v2/all'
    },
  ],
  loading: true,
  error: false
}

export default function reducer (state = initialState, action) {
  const { type, payload } = action;
  if (type === "categories/setCategories") return { ...state, categories: payload }
  if (type === "loadingCategory/setLoadingCategory") return { ...state, loading: payload }
  if (type === "errorCategory/setErrorCategory") return { ...state, error: payload }
  return state;
}
