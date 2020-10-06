import React from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Car } from '../assets/car.svg'

//Styled Components
import { SummaryContainer, SummaryElement } from '../styles/pageStyles'

const Summary = () => {
   const selectedCar = useSelector(state => state.selectedCar)
   const totalPrice = selectedCar.modelPrice + selectedCar.enginePrice + selectedCar.gearboxPrice + selectedCar.colorPrice
   return (
      <SummaryContainer>
         <h2>Summary</h2>
         <div className="preview">
            <Car style={{ fill: selectedCar.color ? selectedCar.color : "rgba(0,0,0,.4)" }} />
         </div>
         <SummaryElement>
            <ul>
               <li>
                  <p>Model</p>
                  {selectedCar.model ? <p>{selectedCar.model}</p> : <p>not yet picked</p>}
               </li>
               <li>
                  <p>Engine</p>
                  {selectedCar.engine ? <p>{selectedCar.engine}</p> : <p>not yet picked</p>}
               </li>
               <li>
                  <p>Gearbox</p>
                  {selectedCar.gearbox ? <p>{selectedCar.gearbox}</p> : <p>not yet picked</p>}
               </li>
               <li>
                  <p>Color</p>
                  {selectedCar.color ? <p>{selectedCar.color}</p> : <p>not yet picked</p>}
               </li>
               <li>
                  <p>Price</p>
                  <p>${totalPrice}</p>
               </li>
            </ul>
         </SummaryElement>
      </SummaryContainer>
   )
}

export default Summary
