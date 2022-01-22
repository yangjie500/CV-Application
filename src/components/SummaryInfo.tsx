import React, { Component } from "react"
import SummaryForm from "./SummaryForm"
import SummaryDisplay from "./SummaryDisplay"

interface formType {
  isToggle: boolean
  type?: "adding" | "updating"
}

interface Summary {
  id: number
  summaryType: string
  summaryDetails: string
}

interface formInput {
  summaryType: string
  summaryDetails: string
}

interface ISummaryInfoState {
  curr_id: number
  edit_id: number | null
  toggleForm: formType
  hovered: boolean
  summaries : Summary[]
  formInput: formInput
}

class SummaryInfo extends Component<{}, ISummaryInfoState> {
  state: ISummaryInfoState = {
    curr_id: 0,
    edit_id: null,
    toggleForm : {
      isToggle: false,
    },
    hovered: false,
    summaries: [],
    formInput: {
      summaryType: "",
      summaryDetails: ""
    }
  }

  handleHovered = (e: React.MouseEvent) => {
    if (e.type == "mouseenter") {
      this.setState({hovered: true})
    } else {
      this.setState({hovered: false})
    }
  }

  toggleForm = (form: formType) => {
    this.setState({
      toggleForm: form
    })
  }

  renderForm = (form: formType) => {
    if (!form.isToggle) return
    
    if (form.type == "adding") {
      return <SummaryForm 
        formType="Add"
        formInput={this.state.formInput}
        handleChangeInput={this.handleChangeInput}
        toggleForm={this.toggleForm}
        addSummary={this.addSummary}
        updateSummary={this.updateSummary}
      />
    }

    if (form.type == "updating") {
      return <SummaryForm 
        formType="Update"
        formInput={this.state.formInput}
        handleChangeInput={this.handleChangeInput}
        toggleForm={this.toggleForm}
        addSummary={this.addSummary}
        updateSummary={this.updateSummary}
      />
    }
  }

  renderUpdateForm = (id: number) => {
    
    const formToBeUpdated = this.state.summaries.filter(summary => summary.id == id)[0]
    this.toggleForm({isToggle: true, type:"updating"})
    this.setState({
      edit_id: id,
      formInput: {
        summaryType: formToBeUpdated.summaryType,
        summaryDetails: formToBeUpdated.summaryDetails
      }
    })
  }

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target

    this.setState({
      formInput: {
        ...this.state.formInput,
        [name]: value
      }
    })
  }

  addSummary = () => {
    const summary: Summary = {
      id: this.state.curr_id,
      summaryType: this.state.formInput.summaryType,
      summaryDetails: this.state.formInput.summaryDetails
    }

    this.setState({
      summaries: [...this.state.summaries, summary],
      curr_id: this.state.curr_id + 1,
      formInput: {
        summaryType: "",
        summaryDetails: ""
      }
    })
  }

  updateSummary = () => {
    this.setState({
      summaries: this.state.summaries.map(summary => {
        if (summary.id == this.state.edit_id) {
          return {
            id: this.state.edit_id,
            summaryType: this.state.formInput.summaryType,
            summaryDetails: this.state.formInput.summaryDetails
          }
        }
        return summary
      }),
      formInput: {
        summaryType: "",
        summaryDetails: ""
      },
      edit_id: null
    })

    this.toggleForm({isToggle: false})
  }

  deleteSummary = (id: number) => {
    this.setState({
      summaries: this.state.summaries.filter(summary => summary.id != id)
    })
  }

  render() {
    console.log(this.state.formInput)
    return (
      <div className="my-4 min-h-[100px]" onMouseEnter={this.handleHovered} onMouseLeave={this.handleHovered}>
        <header className="border-b-2 border-black">
          <h1 className="text-xl uppercase text-bold tracking-wide">Executive Summary</h1>
        </header>

        <div>
          {
            this.state.summaries.map(summary => {
              return <SummaryDisplay 
                key={summary.id}
                summary={summary}
                deleteSummary={this.deleteSummary}
                toggleForm={this.toggleForm}
                renderUpdateForm={this.renderUpdateForm}
              />
            })
          }
        </div>

        {this.state.hovered && <button className="border-2 border-black rounded-full block mx-auto" onClick={() => this.toggleForm({isToggle: true, type:"adding"})}>Add</button>}
        {this.renderForm(this.state.toggleForm)}
      </div>
    )
  }
}

export default SummaryInfo