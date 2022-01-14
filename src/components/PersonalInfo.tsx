import React, { Component } from "react"
import styled from "styled-components"

import InfoChangeable from "./InfoChangeable"

const PersonalInfoSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

class PersonalInfo extends Component {

  render() {
    return (
      <PersonalInfoSection>
        <div>
          <InfoChangeable initialValue="Name Here">
            {(a, b) => <h1 onClick={a}>{b}</h1>}
          </InfoChangeable>
        </div>

        <div>
          <InfoChangeable initialValue="Email Here">
            {(a, b) => <p onClick={a}>{b}</p>}
          </InfoChangeable>
        </div>
      </PersonalInfoSection>
    )
  }
}

export default PersonalInfo