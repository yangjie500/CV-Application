import React, {Component} from "react"

import format from "date-fns/format"

interface IProfessionalInfoDisplayProps {
  id: number
  jobname: string;
  startdate: string;
  enddate: string;
  companyname: string;
  achieve: string;
  deleteDetails: () => void;
  toggleUpdateDetailsModal: () => void;
}

interface IProInfoDisplayState {
  hovered: boolean
}

class ProfessionalInfoDisplay extends Component<IProfessionalInfoDisplayProps, IProInfoDisplayState> {

  
  state: IProInfoDisplayState = {
    hovered: false
  }

  handleHovered = (e: React.MouseEvent) => {
    if (e.type == "mouseenter") {
      this.setState({hovered: true})
    } else {
      this.setState({hovered: false})
    }
  }

  dateFormat = (date_str: string) => {
    const date = new Date(date_str)

    const month = format(date, "MMM")
    const year = format(date, "y")
    return month + " " + year
  }

  formatAchievement = () => {
    const sentences = this.props.achieve.split("\n")
    const paragraph = sentences.map(elem => {
      return <p key={elem}>{elem}</p>
    })

    return paragraph
    
  }

  render() {
    
    return (
      <div className="border-2 border-pink-400" onMouseLeave={this.handleHovered} onMouseEnter={this.handleHovered}>
        <div className="flex justify-between">
          <h3 className="font-semibold text-2xl">{this.props.jobname}</h3>
          <p>{this.dateFormat(this.props.startdate)} - {this.dateFormat(this.props.enddate)}</p>
        </div>
        <h4 className="italic text-sm">{this.props.companyname}</h4>
        <div>{this.formatAchievement()}</div>
        {
          this.state.hovered &&
          <div className="flex justify-center gap-8">
            <button onClick={this.props.deleteDetails}>Delete</button>
            <button onClick={this.props.toggleUpdateDetailsModal}>Update</button>
          </div>
        }
      </div>
    )
  }
}


export default ProfessionalInfoDisplay