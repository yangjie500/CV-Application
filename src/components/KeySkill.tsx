import React, { Component } from "react"

import InfoChangeable from "./InfoChangeable"

interface ISkill {
  id: number;
  initialValue: string
}

interface ISkillState {
  id: number
  hovered: boolean;
  tech: ISkill[];
  soft: ISkill[];
}

class KeySkill extends Component<{} , ISkillState> {
  
  state: ISkillState = {
    id: 0,
    hovered: false,
    tech: [],
    soft: []
  }

  HandleMouseEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.type === 'mouseleave') {
      this.setState({
        hovered: false
      })
    } else {
      this.setState({
        hovered: true
      })
    }
    
  }

  addSkill = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.target as HTMLButtonElement
    const type = element.getAttribute('data-skill')
    if (type === "tech") {
      this.setState({
        tech: [...this.state.tech, {id: this.state.id, initialValue:"Tech Skill"}],
        id: this.state.id + 1
      })

    } else {
      this.setState({
        soft: [...this.state.soft, {id: this.state.id, initialValue:"Soft Skill"}],
        id: this.state.id + 1
      })

    }
  }

  RemoveSkill = (e: React.MouseEvent<HTMLElement> ,id: number) => {
    const element = e.target as HTMLElement
    const type = element.getAttribute('data-skill')
    if (type === "tech") {
      let updatedTech = this.state.tech.filter(tech => tech.id !== id)
      this.setState({
        tech: updatedTech
      })

    } else {
      let updatedSoft = this.state.soft.filter(soft => soft.id !== id)
      this.setState({
        soft: updatedSoft
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
              this.state.tech.map((skill) => {
                console.log("re-render")
                return (
                  <InfoChangeable initialValue={skill.initialValue} key={skill.id} id={skill.id}>
                    {(a, b, c, d, e) => (
                      <div className="flex" onMouseEnter={c} onMouseLeave={d}>
                        <p className="inline-block" onClick={a}>{b}</p>
                        <i className={`fa fa-trash ml-auto ${e ? "block": "hidden"} cursor-pointer`} aria-hidden="true" data-skill="tech" onClick={(e) => this.RemoveSkill(e, skill.id)}></i>
                      </div>
                    )}
                  </InfoChangeable>
                )
              })
              
            } 

            { this.state.hovered && <button className="border-black border-2 self-center px-4 py-1 rounded-lg" data-skill="tech" onClick={this.addSkill}>Add</button>}
          </div>

          <div className="flex flex-col">
            <h3 className="text-center ">Soft Skills</h3>

            {
              this.state.soft.map((skill) => {
                return (
                  <InfoChangeable initialValue={skill.initialValue} key={skill.id} id={skill.id}>
                    {(a, b, c, d, e) => (
                      <div className="flex" onMouseEnter={c} onMouseLeave={d}>
                        <p className="inline-block" onClick={a}>{b}</p>
                        <i className={`fa fa-trash ml-auto ${e ? "block": "hidden"}`} aria-hidden="true" data-skill="soft" onClick={(e) => this.RemoveSkill(e, skill.id)}></i>
                      </div>
                    )}
                  </InfoChangeable>
                )
              })
              
            } 

            { this.state.hovered && <button className="border-black border-2 self-center px-4 py-1 rounded-lg" data-skill="soft" onClick={this.addSkill}>Add</button>}
          </div>
        </div>
      </div>
    )
  }
}

export default KeySkill