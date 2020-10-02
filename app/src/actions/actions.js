import * as types from './actionTypes'

// State management actions

export const pickModel = model => ({
   type: types.PICK_MODEL,
   payload: {
      model
   }
})

export const switchEngine = engine => ({
   type: types.PICK_ENGINE,
   payload: {
      engine
   }
})

export const switchGearbox = gearbox => ({
   type: types.PICK_GEARBOX,
   payload: {
      gearbox
   }
})

export const switchColor = color => ({
   type: types.PICK_COLOR,
   payload: {
      color
   }
})

// Data fetching actions

export const fetchCarsPending = () => ({
   type: types.FETCH_CARS_PENDING
})

export const fetchCarsSuccess = cars => ({
   type: types.FETCH_CARS_SUCCESS,
   payload: {
      cars
   }
})

export const fetchCarsError = error => ({
   type: types.FETCH_CARS_ERROR,
   error
})