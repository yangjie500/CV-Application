import React, {Component} from "react"
import styled from "styled-components"

import PersonalInfo from "./PersonalInfo"
import SummaryInfo from "./SummaryInfo"
import KeySkill from "./KeySkill"
import ProfessionalInfo from "./ProfessionalInfo"

class Main extends Component {

  render() {
    return(
      <main className="mx-auto my-6 p-10 min-w-[800px] w-2/3  h-[80rem] bg-zinc-50 shadow-lg">
        <PersonalInfo />
        <SummaryInfo />
        <KeySkill />
        <ProfessionalInfo />
      </main>
    )
    
  }
}

export default Main