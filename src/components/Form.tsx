import React, { Component } from 'react'

interface formDetails {
  jobname: string;
  startdate: string;
  enddate: string;
  companyname: string;
  achieve: string
}

interface IFormProps {
  type: "add" | "update" | "cancel"
  toggleForm : (type: "add" | "update" | "cancel") => void;
  handleChangeAdd: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addInput: formDetails;
  addDetails: () => void;
  updateDetails?: () => void;
}

class Form extends Component<IFormProps> {
  private myRef

  constructor(props: IFormProps) {
    super(props)
    this.myRef = React.createRef<HTMLFormElement>()
  }



  formValidation = (formInput: formDetails) => {
    let k: keyof formDetails
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
    console.log(noMissing)
    return noMissing
  }

  addDetails = () => {
    const valid = this.formValidation(this.props.addInput)
    if (!valid) return
    this.props.addDetails()
  }

  render() {
    return (
      <div className="centered bg-slate-100 border-2 border-black w-[500px] p-4">
        <h4 className="text-center"> Add Experience </h4>
        <form className="grid" ref={this.myRef}>
          <label htmlFor="job-title">Job Title</label>
          <input id="job-title" name="jobname" type="text" value={this.props.addInput.jobname} onChange={this.props.handleChangeAdd} required/>
          <span data-valid="jobname" className="bg-red-400 text-white text-center opacity-0 rounded-b-md">Empty!!!</span>

          <label htmlFor="date-start">Date Start</label>
          <input id="date-start" name="startdate" type="date" value={this.props.addInput.startdate} onChange={this.props.handleChangeAdd} required/>
          <span data-valid="startdate" className="bg-red-400 text-white text-center opacity-0 rounded-b-md">Empty!!!</span>

          <label htmlFor="date-end">Date End</label>
          <input id="date-end" name="enddate" type="date" value={this.props.addInput.enddate} onChange={this.props.handleChangeAdd} required/>
          <span data-valid="enddate" className="bg-red-400 text-white text-center opacity-0 rounded-b-md">Empty!!!</span>

          <label htmlFor="company-name">Company Name</label>
          <input id="company-name" name="companyname" type="text" value={this.props.addInput.companyname} onChange={this.props.handleChangeAdd} required/>
          <span data-valid="companyname" className="bg-red-400 text-white text-center opacity-0 rounded-b-md">Empty!!!</span>

          <label htmlFor="achieve">Achievements</label>
          <textarea id="achieve" name="achieve" value={this.props.addInput.achieve} onChange={this.props.handleChangeAdd} required/>
          <span data-valid="achieve" className="bg-red-400 text-white text-center opacity-0 rounded-b-md">Empty!!!</span>

        </form>
        
        <div className="flex justify-center gap-8" >
          {this.props.type == "add" ? <button className="" onClick={this.addDetails}>Add New</button> : <button className="" onClick={this.props.updateDetails}>Update</button> }
          <button className="" onClick={() => this.props.toggleForm("cancel")}>Cancel</button>
        </div>
        
      </div>
      
    )
  }
}

export default Form