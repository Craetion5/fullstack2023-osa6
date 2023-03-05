import { useSelector } from 'react-redux'

const Notification = () => {
  const message = useSelector(state => state.notification.message)
  const enabled = useSelector(state => state.notification.enabled)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (enabled) {
    return (
      <div style={style}>
        {message}
      </div>
    )
  } else {
    return (
      <span />
    )
  }
}

export default Notification