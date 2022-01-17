import React, { Component } from "react"

import InfoChangeable from "./InfoChangeable"

interface ISkillState {
  hovered: boolean;
  tech: string[];
  soft: string[];
}

class KeySkill extends Component<{} , ISkillState> {
  
  state: ISkillState = {
    hovered: false,
    tech: [],
    soft: []
  }

  HandleMouseEvent = () => {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  HandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.target as HTMLButtonElement
    const type = element.getAttribute('data-skill')
    if (type === "tech") {
      this.setState({
        tech: [...this.state.tech, "Tech Skill"]
      })
    } else {
      this.setState({
        soft: [...this.state.soft, "Soft Skill"]
      })
    }
  }

  render() {
    return (
      <div className="my-4 min-h-[100px]" onMouseEnter={this.HandleMouseEvent} onMouseLeave={this.HandleMouseEvent}>
        <header className="border-b-2 border-black">
          <h2 className="text-xl uppercase text-bold tracking-wide">Key Skills</h2>
        </header>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <h3 className="text-center">Technical Skills</h3>

            {
              this.state.tech.map((name, id) => {
                return (
                  <InfoChangeable initialValue={name} key={id}>
                    {(a, b, c, d) => (
                      <div className="flex" onMouseEnter={c} onMouseLeave={c}>
                        <p className="inline-block" onClick={a}>{b}</p>
                        <i className={`fa fa-trash ml-auto ${d ? "block": "hidden"}`} aria-hidden="true"></i>
                      </div>
                    )}
                  </InfoChangeable>
                )
              })
              
            } 

            { this.state.hovered && <button className="border-black border-2 self-center px-4 py-1 rounded-lg" data-skill="tech" onClick={this.HandleClick}>Add</button>}
          </div>

          <div className="flex flex-col">
            <h3 className="text-center ">Soft Skills</h3>

            {
              this.state.soft.map((name, id) => {
                return (
                  <InfoChangeable initialValue={name} key={id}>
                    {(a, b, c, d) => (
                      <div className="flex" onMouseEnter={c} onMouseLeave={c}>
                        <p className="inline-block" onClick={a}>{b}</p>
                        <i className={`fa fa-trash ml-auto ${d ? "block": "hidden"}`} aria-hidden="true"></i>
                      </div>
                    )}
                  </InfoChangeable>
                )
              })
              
            } 

            { this.state.hovered && <button className="border-black border-2 self-center px-4 py-1 rounded-lg" data-skill="soft" onClick={this.HandleClick}>Add</button>}
          </div>
        </div>
      </div>
    )
  }
}

export default KeySkill