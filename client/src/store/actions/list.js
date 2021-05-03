import axios from 'axios';

export function setLoading(payload) {
  return { type: 'loading/setLoading', payload }
}

export function setError(payload) {
  return { type: 'error/setError', payload }
}

export function setLists(payload) {
  return { type: 'lists/setLists', payload }
}

export function setListAsync(dataCategory) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.get(dataCategory.url);
      // console.log(data);

      // saya pisah API disini, supaya page dan component react bisa dipakai berulang2
      let newData = [];
      // ANIME
      if (dataCategory.name === 'anime') {
        data.data.forEach(element => {
          let temp = {
            id: '',
            image: '',
            title: '',
            description: ''
          };
          temp.id = element.id;
          temp.image = element.attributes.posterImage.medium;
          temp.title = element.attributes.canonicalTitle;
          temp.description = element.attributes.description;
          
          newData.push(temp);
        });
      // BATIK
      } else if (dataCategory.name === 'batik') {
        data.hasil.forEach(element => {
          let temp = {
            id: '',
            image: '',
            title: '',
            description: ''
          };
          temp.id = element.nama_batik;
          temp.image = element.link_batik;
          temp.title = element.nama_batik;
          temp.description = element.makna_batik;
          
          newData.push(temp);
        });
      // COUNTRY
      } else if (dataCategory.name === 'country') {
        data.forEach(element => {
          let temp = {
            id: '',
            image: '',
            title: '',
            description: ''
          };
          temp.id = element.name;
          temp.image = element.flag;
          temp.title = element.name;
          temp.description = `${element.region} - ${element.subregion}`;
          
          newData.push(temp);
        });
      }

      // setelah API di proses, hasil proses tadi di dispatch ke redux
      dispatch(setLists(newData));
      dispatch(setLoading(false));

    } catch (error) {
      console.log(error);
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  }
}