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

interface information extends formDetails {
  id: number
}

interface IProfInfoState {
  id: number
  editId: number
  info: information[]
  adding: boolean
  updating: boolean
  addInput: formDetails
  hovered: boolean
}

class ProfessionalInfo extends Component<{}, IProfInfoState> {
  state: IProfInfoState = {
    id: 0,
    editId: 0,
    info: [],
    adding : false,
    updating: false,
    addInput: {
      jobname: "",
      startdate: "",
      enddate: "",
      companyname: "",
      achieve: ""
    },
    hovered: false
  }

  handleHovered = (e: React.MouseEvent) => {
    if (e.type == "mouseenter") {
      this.setState({hovered: true})
    } else {
      this.setState({hovered: false})
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

  renderModal = (type: ("add" | "update" | "cancel"),  id? : number) => {

    return (
      <Form 
        type = {type}
        toggleForm={this.toggleForm}
        handleChangeAdd={this.handleChangeAdd} 
        addInput={this.state.addInput}
        addDetails={this.addDetails}
        updateDetails={() => this.updateDetails(id)}
      />
    )
  }

  toggleForm = (type: ("add" | "update" | "cancel")) => {
    if (type == "add") {
      this.setState({ adding: !this.state.adding})
    } else if (type=="update") {
      this.setState({ updating: !this.state.updating})
    } else {
      this.setState({
        adding: false,
        updating: false
      })
    }
  
  }

  addDetails = () => {
    const professionInfo = {
      id : this.state.id,
      ...this.state.addInput
    }

    this.setState({
      id: this.state.id + 1,
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

  toggleUpdateDetailsModal = (id: number) => {
    const toBeUpdatedInfo = this.state.info.filter(elem => {
      return elem.id == id
    })[0]

    this.toggleForm('update')

    this.setState({
      editId : id,
      addInput: {
        jobname: toBeUpdatedInfo.jobname,
        startdate: toBeUpdatedInfo.startdate,
        enddate: toBeUpdatedInfo.enddate,
        companyname: toBeUpdatedInfo.companyname,
        achieve: toBeUpdatedInfo.achieve
      }
    })
  }

  updateDetails = (id: number | undefined) => {
    const professionInfo = {
      ...this.state.addInput
    }

    this.setState({
      info: this.state.info.map(elem => {
        if (elem.id == id) {
          return {...professionInfo, id}
        }
        return elem
      }),
      addInput: {
        jobname: "",
        startdate: "",
        enddate: "",
        companyname: "",
        achieve: ""
      },
      updating: false
    })
  }

  render() {
    return (
      <div className="my-4 min-h-[200px]" onMouseEnter={this.handleHovered} onMouseLeave={this.handleHovered}>
        <header className="border-b-2 border-black">
          <h1 className="text-xl uppercase text-bold tracking-wide">Professional Experience</h1>
        </header>

        <div>
          {
            this.state.info.map(elem => {
              return <ProfessionalInfoDisplay 
              key={elem.id}
              id={elem.id}
              jobname={elem.jobname}
              startdate={elem.startdate}
              enddate={elem.enddate}
              companyname={elem.companyname} 
              achieve={elem.achieve}
              deleteDetails={() => this.deleteDetails(elem.jobname)}
              toggleUpdateDetailsModal={() => this.toggleUpdateDetailsModal(elem.id)}
              />
            })
          }
        </div>

        {this.state.hovered && <button className="border-2 border-black rounded-full block mx-auto" onClick={() => this.toggleForm('add')}>Add</button>}
        {this.state.adding && this.renderModal("add")}
        {this.state.updating && this.renderModal("update", this.state.editId)}
      </div>
    )
  }
}

export default ProfessionalInfo