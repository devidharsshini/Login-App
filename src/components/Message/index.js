// Write your code here

import './index.css'
const Message = props => {
  const {login} = props
  if (login) {
    return <h1 className="msg">Welcome User</h1>
  }

  return <h1 className="msg">Please Login</h1>
}
export default Message
