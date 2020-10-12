import axios from 'axios'
import { fetchCarsPending, fetchCarsSuccess, fetchCarsError } from '../actions/actions'

const URL = "http://localhost:4000/cars"

export const fetchCars = () => {
   return dispatch => {
      dispatch(fetchCarsPending())
      axios.get(URL)
         .then(res => {
            const cars = res.data
            setTimeout(() => {
               dispatch(fetchCarsSuccess(cars))
            }, 1000)
         })
         .catch(err => dispatch(fetchCarsError(err.message)))
   }
}