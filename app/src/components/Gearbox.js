import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions/actions'

//Styled Components
import { ConfiguratorElement, Button } from '../styles/pageStyles'

//Utils
import { toggleActiveClass } from '../utils/toggleActiveClass'
import { getCompatible } from '../utils/getCompatible'

const Gearbox = () => {
   const cars = useSelector(state => state.cars)
   const selectedCar = useSelector(state => state.selectedCar)
   const dispatch = useDispatch()

   const compatible = getCompatible(cars, selectedCar, "gearbox")

   const handleClick = (e, gearbox, price) => {
      dispatch(actions.setGearboxPrice(price))
      dispatch(actions.pickGearbox(gearbox))
      toggleActiveClass(e, ".gearbox button")
   }

   return (
      <ConfiguratorElement animate={{ x: 0 }} initial={{ x: -200 }}>
         <h2 >Choose your gearbox:</h2>
         <div className="gearbox">
            {
               compatible.map(gearbox => (
                  <Button key={gearbox.type} onClick={e => handleClick(e, gearbox.type, gearbox.cost)}>
                     {gearbox.type}
                  </Button>
               ))
            }
         </div>
      </ConfiguratorElement>
   )
}

export default Gearbox
