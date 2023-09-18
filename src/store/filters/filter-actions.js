export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';


export const addFilter = filters => ({
    type: ADD_FILTER,
    payload: filters
});

export const removeFilter = filters => ({
    type: REMOVE_FILTER,
    payload: filters
})

export const clearFilter = {
    type: CLEAR_FILTER,
}