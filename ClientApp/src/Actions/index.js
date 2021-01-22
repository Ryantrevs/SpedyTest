export const newClassified = (value) => ({
    type: 'new_classified',
    payload: value
})

export const getAll = (value)=>({
    type: 'get_All',
    payload: value
})

export const isVisible = (value)=>({
    type: 'setVisible',
    payload: value
})