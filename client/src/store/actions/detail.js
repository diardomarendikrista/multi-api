import axios from 'axios';

export function setLoadingDetail(payload) {
  return { type: 'loadingDetail/setLoadingDetail', payload }
}

export function setErrorDetail(payload) {
  return { type: 'errorDetail/setErrorDetail', payload }
}

export function setDetailAsync(dataCategory, id) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingDetail(true));
      let dataDetail = {
        image: '',
        title: '',
        description: ''
      };
      // saya pisah API disini, supaya page dan component react bisa dipakai berulang2
      // ANIME
      if (dataCategory.name === 'anime') {
        const { data } = await axios(dataCategory.url + '/' + id);
        dataDetail.image = data.data.attributes.posterImage.large;
        dataDetail.title = data.data.attributes.canonicalTitle;
        dataDetail.description = data.data.attributes.description;
      }
      // BATIK
      else if (dataCategory.name === 'batik') {
        const detailURL = dataCategory.url.split('/all').join('/');
        const { data } = await axios(detailURL + id);
        dataDetail.image = data.hasil[0].link_batik;
        dataDetail.title = data.hasil[0].nama_batik;
        dataDetail.description = data.hasil[0].makna_batik;
      }
      // COUNTRY
      else if (dataCategory.name === 'country') {
        const detailURL = dataCategory.url.split('/all').join('/name/');
        const { data } = await axios(detailURL + id);
        console.log(data);
        dataDetail.image = data[0].flag;
        dataDetail.title = data[0].name;
        dataDetail.description = `Country located at: ${data[0].region} - ${data[0].subregion}, Population : ${data[0].population.toLocaleString("en")}.`;
      }
  
      dispatch({ type: 'detail/setDetail', payload: dataDetail });
      dispatch(setLoadingDetail(false));
    } catch (error) {
      console.log(error);
      dispatch(setErrorDetail(true));
      dispatch(setLoadingDetail(false));
    }
  }
}