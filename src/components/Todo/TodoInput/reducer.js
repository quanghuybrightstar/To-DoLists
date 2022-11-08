import { SET_JOB, ADD_JOB } from "./constant";

export const initState = {
    job: '',
    jobs: []
}

//Reducer
const reducer = (state, action) => {

    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            } 
        default:
            throw new Error('Invalid')
    }
}

export default reducer;