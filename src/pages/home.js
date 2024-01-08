import { useEffect, useState } from "react"
import Workoutdetails from "../components/workoutdetails"
import Workoutform from "../components/workoutform"

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts()
    },[])
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <Workoutdetails key={workout._id} workout={workout } />
               ))}
            </div>
            <Workoutform/>
        </div>
    )
}

export default Home