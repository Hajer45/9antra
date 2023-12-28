import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Courses from './Courses'
import Course from './Course'
import angular from '../../assets/angular.png'
import ml from '../../assets/machine-learning.png'
import dev from '../../assets/dev.jpg'
import ia from '../../assets/ia.jpg'
import react from '../../assets/react.jpg'
import flutter from '../../assets/flutter.jpg'


import './LandingPage.css'

export const LandingPage = () => {
  return (
    <>
    <Nav/>
    <Main/>
    <Courses>
      <Course  src={angular} name="Spring / Angular" price="350 TD/ month"/>
      <Course  src={ml} name="machine learning" price="350 TD/ month"/>
      <Course   src={react} name="Node / React" price="350 TD/ month"/>
      <Course   src={dev} name="devops" price="350 TD/ month"/>
      <Course  src={ia} name="intelligence artificielle" price="350 TD/ month"/>
      <Course  src={flutter} name="flutter" price="350 TD/ month"/>
    </Courses>
    </>
  )
}
export default LandingPage;
