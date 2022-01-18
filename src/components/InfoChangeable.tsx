import React, { Component } from "react"

import { InputName } from "./ui/StyledInput"
import PrimaryButton from "./ui/StyledButton"

type handle_click = () => void
type handle_hover = (e:React.MouseEvent<HTMLDivElement>) => void

interface IChangeableProps {
  children: (a: handle_click, b: string, c?: handle_hover, d?: handle_hover, e?: boolean) => React.ReactNode;
  initialValue: string;
  id? : number
}

interface IChangeableState {
  ranOnce: boolean;
  edit: boolean;
  value: string;
  hovered? : boolean
}

class InfoChangeable extends Component<IChangeableProps, IChangeableState> {

  state: IChangeableState = {
    ranOnce: false,
    edit: false,
    value: "",
    hovered: false
  }

  handleHoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({
      hovered: true
    })
  }

  handleHoverExit  = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({
      hovered: false
    })
  }

  handleClick = () => {
    if (!this.state.value) {
      this.setState({value: this.props.initialValue})
    }
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
      <div className="flex flex-row ">
        <input className="mb-2" type="text" name="name" value={this.state.value} onChange={this.handleChange} /> 
        <button className="self-center" onClick={this.handleClick}>Update</button>
      </div>
    )
  }

  render () {
    
    return (
      <div>
        {this.state.edit ? 
          this.renderInputBox()
        : this.props.children(this.handleClick, this.state.ranOnce ? this.state.value : this.props.initialValue, this.handleHoverEnter, this.handleHoverExit, this.state.hovered)}
     </div>      
    )
  }
}

export default InfoChangeable