const notiReducer = (state = 'notification at start', action) => {
  switch (action.type) {
  case ('NOTIFICATION'):
    return action.notification
  case ('DELNOTIFICATION'):
    return action.notification
  default:
    return state
  }
}

export const notify = (notText, notTime) => {
  return async (dispatch) => {
    const notification = notText
    dispatch({
      type: 'NOTIFICATION',
      notification: notification
    })
    setTimeout(() => {
      dispatch({
        type: 'DELNOTIFICATION',
        notification: ''
      })
    }, notTime*1000)
  }
}

export default notiReducer