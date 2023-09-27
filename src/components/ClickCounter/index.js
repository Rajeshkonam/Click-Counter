import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  incCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="c1">
        <h1 className="h1">
          The Button has been clicked <span className="spn">{count}</span> times
        </h1>
        <p className="p1">Click the button to increase the count</p>
        <button type="button" onClick={this.incCount} className="b1">
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
