// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  firstName = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  lastName = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div>
          <button type="button" onClick={this.firstName} className="button">
            Show/Hide Firstname
          </button>
          {firstName && <p className="name">Joe</p>}
          <button type="button" onClick={this.lastName} className="button">
            Show/Hide Lastname
          </button>
          {lastName && <p className="name">Jonas</p>}
        </div>
      </div>
    )
  }
}
export default ShowHide
