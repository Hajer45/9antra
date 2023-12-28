import React from 'react'

export const Course = (props) => {
  return (
    <div className='course'>
      <img className='imgcourse'alt='imgcourse' src={props.src}/>
      <h3 className='name'>{props.name}</h3>
      <p className='price'>{props.price}</p>
    </div>
  )
}
export default Course;

