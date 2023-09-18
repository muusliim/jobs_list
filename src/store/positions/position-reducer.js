import { ADD_POSITIONS } from "./position-actions"

export const positionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS: 
            return [...state, ...action.payload]
        default:
            return state;
    }
}