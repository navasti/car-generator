import * as actions from '../actions/actionTypes'

const initialState = {
   cars: [],
   selectedCar: {
      model: "",
      engine: "",
      gearbox: "",
      color: "",
   },
   pending: false,
   error: null
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actions.PICK_MODEL:
         return {
            ...state,
            selectedCar: {
               ...state.selectedCar,
               model: action.payload.model
            }
         }
      case actions.PICK_ENGINE:
         return {
            ...state,
            selectedCar: {
               ...state.selectedCar,
               engine: action.payload.engine
            }
         }
      case actions.PICK_GEARBOX:
         return {
            ...state,
            selectedCar: {
               ...state.selectedCar,
               gearbox: action.payload.gearbox
            }
         }
      case actions.PICK_COLOR:
         return {
            ...state,
            selectedCar: {
               ...state.selectedCar,
               color: action.payload.color
            }
         }
      case actions.FETCH_CARS_PENDING:
         return {
            ...state,
            pending: true
         }
      case actions.FETCH_CARS_SUCCESS:
         return {
            ...state,
            pending: false,
            cars: action.payload.cars
         }
      case actions.FETCH_CARS_ERROR:
         return {
            ...state,
            pending: false,
            error: action.error
         }
      default:
         return state
   }
}

export default reducer