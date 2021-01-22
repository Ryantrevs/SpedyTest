const initialState = false
  
const VisibleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'setVisible':
        return (state=action.payload)
      default:
        return state;
    }
};

export default VisibleReducer