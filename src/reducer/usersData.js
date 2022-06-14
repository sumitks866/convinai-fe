const userDataReducer = (state = null, action) => {
  switch(action.type) {
    case 'LOAD_META_DATA': return {
      ...action.payload
    }
    default: return state;
  }
}

export default userDataReducer;