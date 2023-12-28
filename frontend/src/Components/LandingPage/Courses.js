import React from 'react'

export const Courses = (props) => {
  return (
    <div className='courses'>
        <div className='about'>
            <h2 className='title'>discover our courses</h2>
            <button className='btnview'>view more</button>
        </div>
        <div className='coursesContainer'>
        {props.children}
        </div>

    </div>
  )
}

export default Courses;
