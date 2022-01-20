import React, { Component } from "react"

import Form from "./Form"
import ProfessionalInfoDisplay from "./ProfessionalInfoDisplay"

interface formDetails {
  jobname: string;
  startdate: string;
  enddate: string;
  companyname: string;
  achieve: string
}

interface IProfInfoState {
  info: formDetails[]
  adding: boolean;
  addInput: formDetails
}

class ProfessionalInfo extends Component<{}, IProfInfoState> {
  state: IProfInfoState = {
    info: [],
    adding : false,
    addInput: {
      jobname: "",
      startdate: "",
      enddate: "",
      companyname: "",
      achieve: ""
    }
  }

  handleChangeAdd = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    this.setState({
      addInput: {
        ...this.state.addInput,
        [name]: value
      }
    })
  }

  renderModal = () => {
    return (
      <Form 
        toggleForm={this.toggleForm}
        handleChangeAdd={this.handleChangeAdd} 
        addInput={this.state.addInput}
        addDetails={this.addDetails}
      />
    )
  }

  toggleForm = () => {
    this.setState({ adding: !this.state.adding})
  }

  addDetails = () => {
    const professionInfo = {
      ...this.state.addInput
    }

    this.setState({
      info: [...this.state.info, professionInfo],
      addInput: {
        jobname: "",
        startdate: "",
        enddate: "",
        companyname: "",
        achieve: ""
      }
    })
  }

  deleteDetails = (jobname: string) => {
    console.log(jobname)
    this.setState({
      info: this.state.info.filter(elem => elem.jobname != jobname)
    })
  }

  render() {
    console.log(this.state.addInput)
    return (
      <div className="my-4">
        <header className="border-b-2 border-black">
          <h1 className="text-xl uppercase text-bold tracking-wide">Professional Experience</h1>
        </header>

        <div>
          {
            this.state.info.map(elem => {
              return <ProfessionalInfoDisplay 
              key={elem.jobname}
              jobname={elem.jobname}
              startdate={elem.startdate}
              enddate={elem.enddate}
              companyname={elem.companyname} 
              achieve={elem.achieve}
              deleteDetails={() => this.deleteDetails(elem.jobname)}
              />
            })
          }
        </div>

        <button className="border-2 border-black rounded-full" onClick={this.toggleForm}>Add</button>
        {this.state.adding && this.renderModal()}
      </div>
    )
  }
}

export default ProfessionalInfo