const initialState = {
  selected: 'chest'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_MUSCLE_TITLE':
      return Object.assign({}, state, { selected: action.title });
    default:
      return state;
  }
};
