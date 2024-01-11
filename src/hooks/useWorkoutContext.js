import { WorkoutsContext } from '../context/workoutcontext'
import { useContext } from 'react'

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error('useWorkoutsdContext must be used inside an WorkoutsContextProvider')
    }
    return context
}