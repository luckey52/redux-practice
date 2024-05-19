let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("action은", action);

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state, count: state.count + 1 };
  }
}

export default reducer;
