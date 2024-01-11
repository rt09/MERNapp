import { useWorkoutsContext } from "../hooks/useWorkoutContext"
const Workoutdetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();
    const handleclick = async () => {
        
        const response = await fetch('/api/workouts/' + workout._id, {
            method:'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type:'DELETE_WORKOUT', payload:json})
        }

    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Description: </strong>{workout.description}</p>
            <p><strong>Date: </strong>{workout.date}</p>
            <span onClick={handleclick}>delete</span>
        </div>
    )
}
export default Workoutdetails