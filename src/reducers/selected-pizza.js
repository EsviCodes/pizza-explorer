const selectedPizza = (state = null, action = {}) => {
  switch (action.type) {
    case "SELECT_PIZZA":
      return action.payload;
    default:
      return state;
  }
};

export default selectedPizza;
