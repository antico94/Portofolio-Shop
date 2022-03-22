const reducer = (state = 'Products Page', action) => {
  switch (action.type) {
    case 'ProductsPage':
      return action.payload;

    case 'DealsPage':
      return action.payload;

    case 'CustomerServicePage':
      return action.payload;

    case 'GiftCardPage':
      return action.payload;

    default:
      return state;
  }
};

export default reducer;