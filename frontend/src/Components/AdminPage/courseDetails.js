import { useCoursesContext } from '../../hooks/useCoursesContext'

const CourseDetails = ({ course }) => {
    const { dispatch } = useCoursesContext()

  const handleClick = async () => {
    const response = await fetch('/api/courses/' + course._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_COURSE', payload: json})
    }
    }
    return (
      <div className="course-details">
        <h4>{course.title}</h4>
        <p><strong>Price (TD): </strong>{course.price}</p>
        <p><strong>image : </strong>{course.image}</p>
        <p>{course.createdAt}</p>
        <span onClick={handleClick}>delete</span>

      </div>
    )
  }
  
export default CourseDetails