import React from 'react'
import * as actions from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux'

//Styled Components
import { ConfiguratorElement, Button } from '../styles/pageStyles'

//Utils
import { toggleActiveClass } from '../utils/toggleActiveClass'

const Model = () => {
   const dispatch = useDispatch()
   const cars = useSelector(state => state.cars)
   const state = useSelector(state => state)

   const handleClick = (e, model, price) => {
      dispatch(actions.pickModel(model))
      dispatch(actions.setModelPrice(price))
      dispatch(actions.setGearboxPrice(0))
      dispatch(actions.setEnginePrice(0))
      dispatch(actions.setColorPrice(0))
      dispatch(actions.pickGearbox(""))
      dispatch(actions.pickEngine(""))
      dispatch(actions.pickColor(""))
      toggleActiveClass(e, ".model button, .engine button")
   }

   return (
      <ConfiguratorElement animate={{ x: 0 }} initial={{ x: -200 }}>
         <h2>Choose your model:</h2>
         <div className="model">
            {
               cars.model.map(car => (
                  <Button onClick={e => handleClick(e, car.name, car.cost)} key={car.name}>
                     {car.name}
                  </Button>
               ))
            }
         </div>
      </ConfiguratorElement>
   )
}

export default Model
