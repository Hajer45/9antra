import { useState } from 'react'
import { useCoursesContext } from '../../hooks/useCoursesContext'

const CourseForm = () => {
    const { dispatch } = useCoursesContext()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, price, image}
    
    const response = await fetch('/api/courses', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setPrice('')
      setImage('')
      dispatch({type: 'CREATE_WORKOUT', payload: json})

      console.log('new course added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Course</h3>

      <label>Course Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>price (in TD):</label>
      <input 
        type="text" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
      />

      <label>Number of Reps:</label>
      <input 
        type="file" 
        onChange={(e) => {
            console.profileEnd(e.target.files[0].name)
            setImage("../../assets/"+e.target.files[0].name)
        }
        } 
      />

      <button>Add Course</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CourseForm