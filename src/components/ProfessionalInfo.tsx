import React, { Component } from "react"
import ReactDOM from "react-dom"

class ProfessionalInfo extends Component {
  state = {
    adding : false
  }
  renderModal = () => {
    return ReactDOM.createPortal(
      <h1>Hello World</h1>,
      document.getElementById('modal')!
    )
  }
  render() {
    return (
      <div className="my-4">
        <header className="border-b-2 border-black">
          <h1 className="text-xl uppercase text-bold tracking-wide">Professional Experience</h1>
        </header>

        <button className="border-2 border-black rounded-full" onClick={() => this.setState({adding: true})}>Add</button>
        {this.state.adding && this.renderModal()}
      </div>
    )
  }
}

export default ProfessionalInfo