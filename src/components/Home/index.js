// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {login: false}

  onClicking = () => {
    this.setState(prevState => ({
      login: !prevState.login,
    }))
  }
  render() {
    const {login} = this.state
    return (
      <div className="container">
        <Message login={login} />
        {login ? (
          <Logout onClickLogout={this.onClicking} />
        ) : (
          <Login onClickLogin={this.onClicking} />
        )}
      </div>
    )
  }
}
export default Home
