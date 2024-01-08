const Workoutdetails = ({ workout }) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Age (in Years):</strong>{workout.Age}</p>
            <p><strong>Weight (in kg):</strong>{workout.Weight}</p>
        </div>
    )
}
export default Workoutdetails