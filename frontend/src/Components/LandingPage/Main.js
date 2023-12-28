import React from 'react'
import bg from '../../assets/landingbg.png'
export const Main = () => {
  return (
    <>
    <div className='main'>
        <img className='bg' src={bg}  alt="learning"/>
        <div className='main-content'>
            <p>Improve your skills on your own</p>
            <p>To prepare for a better future</p>
            <button className='btnreg'>REGISTER NOW</button>
        </div>
    </div>
    </>
  )
}
export default Main;
