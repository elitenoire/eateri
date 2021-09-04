import { useReducer, useCallback } from 'react'
import { clamp } from '~/lib/utils'
import { INC, DEC, GOTO } from '~/constants'

const reducer = (state, { type, index }) => {
    const { count, start, end, isCyclic } = state
    const total = isCyclic ? end - start + 1 : null

    switch (type) {
        case INC:
            return {
                ...state,
                direction: 1,
                count: isCyclic ? (count + 1 + total) % total : clamp(count + 1, start, end),
            }
        case DEC:
            return {
                ...state,
                direction: -1,
                count: isCyclic ? (count - 1 + total) % total : clamp(count - 1, start, end),
            }
        case GOTO:
            return { ...state, direction: 0, count: clamp(index, start, end) }
        default:
            return state
    }
}

const useCounter = ({ count, direction = 0, start = 0, end = 4, isCyclic = false }) => {
    const defaultCount = count || start

    const initialState = { count: defaultCount, defaultCount, direction, start, end, isCyclic }

    const [state, dispatch] = useReducer(reducer, initialState)

    const increment = useCallback(() => dispatch({ type: INC }), [dispatch])

    const decrement = useCallback(() => dispatch({ type: DEC }), [dispatch])

    const goto = useCallback(index => dispatch({ type: GOTO, index }), [dispatch])

    const isStart = !isCyclic && state.count === state.start

    const isEnd = !isCyclic && state.count === state.end

    return {
        ...state,
        increment,
        decrement,
        goto,
        isStart,
        isEnd,
    }
}

export default useCounter
