const initialState = []
  
const ClassifiedReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'new_classified':  
        return ([action.payload,...state])
      case 'get_All':
        return (state=action.payload)
      default:
        return state;
    }
};

export default ClassifiedReducer