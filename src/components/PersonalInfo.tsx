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
            {(a, b) => <h1 className="text-5xl" onClick={a}>{b}</h1>}
          </InfoChangeable>
        </div>

        <div className="justify-self-end">
            <InfoChangeable initialValue="Phone Here">
              {(a, b) => (
                <div>
                  <span className="mr-2 font-bold">Phone number:</span>
                  <p className="inline-block" onClick={a}>{b}</p>
                </div>
              )}
            </InfoChangeable>
            <InfoChangeable initialValue="Email Here">
              {(a, b) => (
                <div>
                  <span className="mr-2 font-bold">Email:</span>
                  <p className="inline-block" onClick={a}>{b}</p>
                </div>
              )}
            </InfoChangeable>
            <InfoChangeable initialValue="URL Here">
              {(a, b) => (
                <div>
                  <span className="mr-2 font-bold">Linkedin URL:</span>
                  <p className="inline-block" onClick={a}>{b}</p>
                </div>
              )}
            </InfoChangeable>
            <InfoChangeable initialValue="Address Here">
              {(a, b) => (
                <div>
                  <span className="mr-2 font-bold">Address:</span>
                  <p className="inline-block" onClick={a}>{b}</p>
                </div>
              )}
            </InfoChangeable>
        </div>
      </PersonalInfoSection>
    )
  }
}

export default PersonalInfo