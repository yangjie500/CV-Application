import React, { Component } from 'react'

interface formType {
  isToggle: boolean
  type?: "adding" | "updating"
}

interface formInput {
  summaryType: string
  summaryDetails: string
}

interface ISummaryFormProps {
  formType: "Add" | "Update"
  formInput: formInput
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  toggleForm: (form: formType) => void
  addSummary: () => void
  updateSummary: () => void
}

class SummaryForm extends Component<ISummaryFormProps> {
  formValidation = (formInput: formInput) => {
    let k: keyof formInput
    let noMissing = true
    for ( k in formInput) { 
      const span = document.querySelector(`[data-valid="${k}"]`) as HTMLSpanElement  

      if (formInput[k]) span.classList.add("opacity-0")

      if (!formInput[k]) {
        console.log("hello")
        span.classList.remove("opacity-0")
        
        noMissing = false
      } 
    }
    return noMissing
  }

  addSummaryHelper = () => {
    const valid = this.formValidation(this.props.formInput)
    if (!valid) return
    this.props.addSummary()
  }

  updateSummaryHelper = () => {
    const valid = this.formValidation(this.props.formInput)
    if (!valid) return
    this.props.updateSummary()
  }

  render() {
    return (
      <div className="centered bg-slate-100 border-2 border-black w-[500px] p-4">
        <h4 className="text-center"> {this.props.formType} Summary </h4>
        <form className="grid">
          <label htmlFor="summary-type">Summary Type</label>
          <input id="summary-type" name="summaryType" type="text" value={this.props.formInput.summaryType} onChange={this.props.handleChangeInput} required/>
          <span data-valid="summaryType" className="bg-red-400 text-white text-center opacity-0 rounded-b-md">Empty!!!</span>

          <label htmlFor="summary-details">Summary Details</label>
          <textarea id="summary-details" name="summaryDetails" value={this.props.formInput.summaryDetails} onChange={this.props.handleChangeInput} required/>
          <span data-valid="summaryDetails" className="bg-red-400 text-white text-center opacity-0 rounded-b-md">Empty!!!</span>

        </form>

        <div className="flex justify-center gap-8" >
          {this.props.formType == "Add" ? <button onClick={this.addSummaryHelper}>Add</button> : <button onClick={this.updateSummaryHelper}>Update</button>}
          <button onClick={() => this.props.toggleForm({isToggle: false})}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default SummaryForm