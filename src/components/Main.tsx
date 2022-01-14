import React, {Component} from "react"

import PersonalInfo from "./PersonalInfo"

class Main extends Component {

  render() {
    return(
      <main className="mx-auto my-6 p-10 min-w-[800px] w-2/3  h-[80rem] bg-zinc-50 shadow-lg">
        <PersonalInfo />
      </main>
    )
    
  }
}

export default Main