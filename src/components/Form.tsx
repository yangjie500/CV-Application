import React, { Component } from 'react'

interface formDetails {
  jobname: string;
  startdate: string;
  enddate: string;
  companyname: string;
  achieve: string
}

interface IFormProps {
  toggleForm : () => void;
  handleChangeAdd: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  addInput: formDetails;
  addDetails: () => void;
}

class Form extends Component<IFormProps> {
  render() {
    return (
      <div className="centered bg-slate-100 border-2 border-black w-[500px]">
        <h4 className="text-center"> Add Experience </h4>
        <form className="grid">
          <label htmlFor="job-title">Job Title</label>
          <input id="job-title" name="jobname" type="text" value={this.props.addInput.jobname} onChange={this.props.handleChangeAdd}/>
          <label htmlFor="date-start">Date Start</label>
          <input id="date-start" name="startdate" type="date" value={this.props.addInput.startdate} onChange={this.props.handleChangeAdd}/>
          <label htmlFor="date-end">Date Start</label>
          <input id="date-end" name="enddate" type="date" value={this.props.addInput.enddate} onChange={this.props.handleChangeAdd}/>
          <label htmlFor="company-name">Company Name</label>
          <input id="company-name" name="companyname" type="text" value={this.props.addInput.companyname} onChange={this.props.handleChangeAdd}/>
          <label htmlFor="achieve">Achievements</label>
          <textarea id="achieve" name="achieve" value={this.props.addInput.achieve} onChange={this.props.handleChangeAdd}/>
        </form>
        <div className="flex justify-center gap-8">
          <button className="" onClick={this.props.addDetails}>Add New</button>
          <button className="" onClick={this.props.toggleForm}>Cancel</button>
        </div>
        
      </div>
      
    )
  }
}

export default Form