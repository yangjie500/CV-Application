import React, { Component } from "react"

import StyledInput from "./ui/StyledInput"

type handle_click = () => void

interface IChangeableProps {
  children: (a: handle_click, b: string) => React.ReactNode;
  initialValue: string;
}

interface IChangeableState {
  ranOnce: boolean;
  edit: boolean;
  value: string;
}

class InfoChangeable extends Component<IChangeableProps, IChangeableState> {

  state: IChangeableState = {
    ranOnce: false,
    edit: false,
    value: ""
  }

  handleClick = () => {
    this.setState({
      ranOnce: true,
      edit: !this.state.edit
    })
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    this.setState({
      value: value
    })
  }

  renderInputBox() {
    return (
      <div>
        <StyledInput type="text" name="name" value={this.state.value} onChange={this.handleChange} /> 
        <button onClick={this.handleClick}>Update</button>
      </div>
    )
  }

  render () {
    console.log(this.state.edit)
    return (
      <div>
        {this.state.edit ? 
          this.renderInputBox()
        : this.props.children(this.handleClick, this.state.ranOnce ? this.state.value : this.props.initialValue)}
     </div>      
    )
  }
}

export default InfoChangeable