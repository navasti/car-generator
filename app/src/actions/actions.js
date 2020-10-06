import * as types from './actionTypes'

// State management actions

export const pickModel = model => ({
   type: types.PICK_MODEL,
   payload: {
      model
   }
})

export const pickEngine = engine => ({
   type: types.PICK_ENGINE,
   payload: {
      engine
   }
})

export const pickGearbox = gearbox => ({
   type: types.PICK_GEARBOX,
   payload: {
      gearbox
   }
})

export const pickColor = color => ({
   type: types.PICK_COLOR,
   payload: {
      color
   }
})

export const setModelPrice = modelPrice => ({
   type: types.SET_MODEL_PRICE,
   payload: {
      modelPrice
   }
})

export const setEnginePrice = enginePrice => ({
   type: types.SET_ENGINE_PRICE,
   payload: {
      enginePrice
   }
})

export const setGearboxPrice = gearboxPrice => ({
   type: types.SET_GEARBOX_PRICE,
   payload: {
      gearboxPrice
   }
})

export const setColorPrice = colorPrice => ({
   type: types.SET_COLOR_PRICE,
   payload: {
      colorPrice
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