import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutContext"

const Workoutform = () => {
    const {dispatch} = useWorkoutsContext()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const date = document.getElementById("date").value;
        


        const workout = { title, description, date };
        
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setDescription('')
            setDate('')
            setError(null)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }
    return (
      <form className="create" onSubmit={handleSubmit}>
        <h3>Things To DO !!</h3>

        <label>Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Description:</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>Date:</label>
        <input
          type="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
            />
            <button>Add </button>
            {error && <div className="error">{error}</div>}
      </form>
    );
}

export default Workoutform