import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Headline = styled.h1`
   font-size: 3.2rem;
   text-align: center;
   margin-bottom: 3rem;
   @media (max-width: 1400px){
      font-size: 2.9rem;
      margin-bottom: 2.5rem;
   }
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
   @media (max-width: 1400px){
      width: 16rem;
      font-size: 1.8rem;
      padding: 1rem 0;
   }
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
   margin-bottom: 4rem;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   @media (max-width: 1400px){
      margin-bottom: 2rem;
   }
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
   @media (max-width: 1400px){
      margin-right: 5rem;
      height: 50rem;
      p{
         font-size: 1.4rem;
      }
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
   @media (max-width: 1400px){
      h2{
         font-size: 2.5rem;
         margin: 1.5rem 0 .5rem .5rem;
      }
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
      position: relative;
      svg{
         width: 100%;
         height: 20rem;
      }
   }
   @media (max-width: 1400px){
      h2{
         font-size: 2.5rem;
         margin: 1rem 0 2rem 0;
      }
   }
`

export const Attribute = styled.div`
   position: absolute;
   bottom: .7rem;
   right: .9rem;
   color: #fff;
   a{
      color: #fff;
      margin-left: .3rem;
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
   @media (max-width: 1400px){
      ul{
         margin: 2rem 0 1rem 0;
         li{
            margin-bottom: 1rem;
            p{
               font-size: 1.8rem;
            }
         }
      }
   }

`