import React, {Component} from "react"

import format from "date-fns/format"

interface IProfessionalInfoDisplayProps {
  jobname: string;
  startdate: string;
  enddate: string;
  companyname: string;
  achieve: string;
  deleteDetails: () => void;
}

class ProfessionalInfoDisplay extends Component<IProfessionalInfoDisplayProps> {
  dateFormat = (date_str: string) => {
    const date = new Date(date_str)

    const month = format(date, "MMM")
    const year = format(date, "y")
    return month + " " + year
  }

  render() {
  
    return (
      <div className="border-2 border-pink-400">
        <div className="flex justify-between">
          <h3 className="font-semibold text-2xl">{this.props.jobname}</h3>
          <p>{this.dateFormat(this.props.startdate)} - {this.dateFormat(this.props.enddate)}</p>
        </div>
        <h4 className="italic text-sm">{this.props.companyname}</h4>
        <p>{this.props.achieve}</p>
        <div>
          <button onClick={this.props.deleteDetails}>Delete</button>
        </div>
      </div>
    )
  }
}


export default ProfessionalInfoDisplay