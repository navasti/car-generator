import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// Utils
import { fetchCars } from './utils/fetchCars'

// Components
import Summary from './components/Summary'
import Gearbox from './components/Gearbox'
import Engine from './components/Engine'
import Model from './components/Model'
import Color from './components/Color'

// Styled Components
import { Container, Headline, Main, Configurator, Loader } from './styles/pageStyles'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  html{
    font-family: Ubuntu, sans-serif;
    font-size: 10px;
  }

  body{
    background: #ddd;
  }
`

const Layout = ({ fetchCars }) => {
  const selectedCar = useSelector(state => state.selectedCar)
  const cars = useSelector(state => state.cars)
  useEffect(() => {
    fetchCars()
  }, [fetchCars])

  return (
    <>
      <GlobalStyles />
      <Container>
        <Headline>Start customizing your car!</Headline>
        <Main>
          <Configurator>
            {cars.model ? <Model /> : <Loader />}
            {selectedCar.model ? <Engine /> : <p>Select model to see your engine options</p>}
            {selectedCar.engine && <Gearbox />}
            {selectedCar.gearbox && <Color />}
          </Configurator>
          <Summary />
        </Main>
      </Container>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCars: () => dispatch(fetchCars())
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)