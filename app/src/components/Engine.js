import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions/actions'

//Styled Components
import { ConfiguratorElement, Button } from '../styles/pageStyles'

//Utils
import { toggleActiveClass } from '../utils/toggleActiveClass'
import { getCompatible } from '../utils/getCompatible'

const Engine = () => {
   const selectedCar = useSelector(state => state.selectedCar)
   const cars = useSelector(state => state.cars)
   const dispatch = useDispatch()

   const compatible = getCompatible(cars, selectedCar, "engine")

   const handleClick = (e, engine, price) => {
      dispatch(actions.setEnginePrice(price))
      dispatch(actions.pickEngine(engine))
      toggleActiveClass(e, ".engine button")
   }

   return (
      <ConfiguratorElement animate={{ x: 0 }} initial={{ x: -200 }}>
         <h2>Choose your engine:</h2>
         <div className="engine">
            {
               compatible.map(engine => (
                  <Button color="black" key={engine.type} onClick={e => handleClick(e, engine.type, engine.cost)}>
                     {engine.type} <br /> ({engine.power})
                  </Button>
               ))
            }
         </div>
      </ConfiguratorElement>
   )
}

export default Engine
