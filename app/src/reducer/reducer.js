import * as actions from '../actions/actionTypes'

const initialState = {
   cars: [],
   selectedCar: {
      gearbox: "",
      engine: "",
      model: "",
      color: "",
      gearboxPrice: 0,
      enginePrice: 0,
      modelPrice: 0,
      colorPrice: 0,
      totalPrice: 0
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
      case actions.SET_MODEL_PRICE:
         return {
            ...state,
            selectedCar: {
               ...state.selectedCar,
               modelPrice: action.payload.modelPrice
            }
         }
      case actions.SET_ENGINE_PRICE:
         return {
            ...state,
            selectedCar: {
               ...state.selectedCar,
               enginePrice: action.payload.enginePrice
            }
         }
      case actions.SET_GEARBOX_PRICE:
         return {
            ...state,
            selectedCar: {
               ...state.selectedCar,
               gearboxPrice: action.payload.gearboxPrice
            }
         }
      case actions.SET_COLOR_PRICE:
         return {
            ...state,
            selectedCar: {
               ...state.selectedCar,
               colorPrice: action.payload.colorPrice
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