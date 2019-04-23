import axios from 'axios'

const baseURi = 'http://handson.eniwine.com.br/api/descubraoassassino/'

export default function asyncData({ params, store }) {
    return axios.all([
        axios.get(`${baseURi}armas`),
        axios.get(`${baseURi}locais`),
        axios.get(`${baseURi}criminosos`)
    ]).then(axios.spread((weapons, places, criminals) => {
          store.commit('addWeapons', JSON.parse(weapons.data))
          store.commit('addPlaces', JSON.parse(places.data))
          store.commit('addCriminals', JSON.parse(criminals.data))
    })).catch((err) => {
      error({ statusCode: 404, message: err.message })
    })
}
