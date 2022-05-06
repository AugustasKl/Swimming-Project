import Header from 'components/layout/header/Header'
import React from 'react'
import { PlanSection, Pricing } from './sections'
// import PlanSection from './sections/PlanSection'

const Checkout:React.FC = () => (
    <>
    <Header/>
    <PlanSection/>
    <Pricing/>
    </>
)

export default Checkout