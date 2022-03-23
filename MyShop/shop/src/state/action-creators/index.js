export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount
    })
  }
}

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount
    })
  }
}


export const setPage = (pageName) => {
  return (dispatch) => {
    dispatch({
      type: pageName,
      payload: pageName
    })
  }
}

export const showHeader = () => {
  return (dispatch) => {
    dispatch({
      type: "show",
      payload: true
    })
  }
}

export const hideHeader = () => {
  return (dispatch) => {
    dispatch({
      type: "hide",
      payload: false
    })
  }
}


export const darkModeOn = () => {
  return (dispatch) => {
    dispatch({
      type: "on",
      payload: true
    })
  }
}

export const darkModeOff = () => {
  return (dispatch) => {
    dispatch({
      type: "off",
      payload: false
    })
  }
}