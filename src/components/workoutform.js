import { useState } from "react"

const Workoutform = () => {
    const [title,setTitle] = useState('')
    const [Age,setAge] = useState('')
    const [Weight, setWeight] = useState('')
    const [error, setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, Age, Weight }
        
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
            setAge('')
            setWeight('')
            setError(null)
        }
    }
    return (
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>

        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Age:</label>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={Age}
        />

        <label>Weight:</label>
        <input
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          value={Weight}
            />
            <button>Add new data</button>
            {error && <div className="error">{error}</div>}
      </form>
    );
}

export default Workoutform