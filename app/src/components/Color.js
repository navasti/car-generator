import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../actions/actions'

//Styled Components
import { ConfiguratorElement, Button } from '../styles/pageStyles'

//Utils
import { toggleActiveClass } from '../utils/toggleActiveClass'

const Color = () => {
   const state = useSelector(state => state)
   const dispatch = useDispatch()

   const handleClick = (e, color, price) => {
      dispatch(actions.setColorPrice(price))
      dispatch(actions.pickColor(color))
      toggleActiveClass(e, ".colors button")
   }

   return (
      <ConfiguratorElement animate={{ x: 0 }} initial={{ x: -200 }}>
         <h2>Choose your car color:</h2>
         <div className="colors">
            {
               state.cars.color.map(color => (
                  <Button
                     className="colored"
                     color={color.name}
                     key={color.name}
                     onClick={e => handleClick(e, color.name, color.cost)}
                  >
                     {color.name}
                  </Button>
               ))
            }
         </div>
      </ConfiguratorElement>
   )
}

export default Color
