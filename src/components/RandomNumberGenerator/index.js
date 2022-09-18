// Write your code here
/* Write your CSS here */

// Write your cod
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomgenerate = () => {
    const Random = Math.ceil(Math.Random * 100)
    this.setState({count: Random})
  }

  render() {
    const {count} = this.state
    return (
      <div className="mainbg">
        <div className="innerbg">
          <h1 className="h">Random number</h1>
          <p className="p">Generate Random number between 0 ot 100</p>
          <button type="button" className="butt" onClick={this.randomgenerate}>
            Generate
          </button>
          <p className="h">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
