import { useEffect } from "react"
import { useCoursesContext } from "../../hooks/useCoursesContext"

// components
import CourseDetails from "./courseDetails"
import CourseForm from './CourseForm'

const Courses = () => {
    const { courses, dispatch } = useCoursesContext()

    useEffect(() => {
      const fetchCourses = async () => {
        const response = await fetch('/api/courses')
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'SET_COURSES', payload: json})
        }
      }
  
      fetchCourses()
    }, [dispatch])
  

  return (
    <div className="home">
      <div>
        {courses && courses.map(course => (
          <CourseDetails course={course} key={course._id} />
        ))}
      </div>
            <CourseForm/>
    </div>
  )
}

export default Courses