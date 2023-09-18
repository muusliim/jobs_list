export const selectAllPositions = state => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) return state;

    return state.filter(pos => {
        const posFilters = [pos.role, pos.level, ...pos.languages, ...pos.tools];

        return filters.every(filter => posFilters.includes(filter))
    })
}