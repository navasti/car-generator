import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Headline = styled.h1`
   font-size: 3.2rem;
   text-align: center;
   margin-bottom: 3rem;
`

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
`

export const Button = styled.button.attrs(props => ({ color: props.color || "black" }))`
   width: 17rem;
   font-size: 2rem;
   margin: .5rem;
   padding: 1.3rem 0;
   border: 1px solid #666;
   cursor: pointer;
   display: inline-block;
   vertical-align: middle;
   transform: perspective(1px) translateZ(0);
   box-shadow: 0 0 1px rgba(0, 0, 0, 0);
   position: relative;
   transition-property: color;
   transition-duration: 0.4s;
   &::before{
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${props => props.color};
      transform: scaleX(0);
      transform-origin: 50%;
      transition-property: transform;
      transition-duration: 0.4s;
      transition-timing-function: ease-out;
   }
   &:hover{
      color: #fff;
   }
   &.colored:hover{
      color: #000;
   }
   &:hover:before{
      transform: scaleX(1);
   }
   &.active{
      color: #fff;
      background-color: ${props => props.color};
   }
   &.colored.active{
      color: #000;
   }
`

export const Main = styled.main`
   margin-bottom: 5rem;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Configurator = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   margin-right: 15rem;
   height: 57rem;
   p{
      margin: .5rem 0 0 .5rem;
      font-size: 1.6rem;
   }
`

export const ConfiguratorElement = styled(motion.div)`
   h2{
      font-size: 2.8rem;
      margin: 2rem 0 .5rem .5rem;
   }
   div{
      width: 75rem;
      display: flex;
      flex-wrap: wrap;
   }
`

export const SummaryContainer = styled.div`
   display: flex;
   width: 35rem;
   flex-direction: column;
   justify-content: center;
   background-color: #bbb;
   padding: 1.5rem;
   margin-right: .5rem;
   h2{
      font-size: 2.8rem;
      margin: 1.5rem 0 2.5rem 0;
   }
   .preview{
      width: 100%;
      background-color: #222;
      border-radius: 1rem;
      align-self: center;
      svg{
         width: 100%;
         height: 20rem;
      }
   }
`

export const SummaryElement = styled.div`
   ul{
      margin: 2.5rem 0 1.5rem 0;
      list-style: none;
      li{
         margin-bottom: 1.2rem;
         width: 100%;
         justify-content: space-between;
         display: flex;
         color: #000;
         p{
            font-size: 2rem;
         }
      }
      li:last-of-type{
         margin-top: 2.8rem;
      }
   }
`