import React, {Component} from "react"

interface formType {
  isToggle: boolean
  type?: "adding" | "updating"
}

interface Summary {
  id: number
  summaryType: string
  summaryDetails: string
}

interface ISummaryProps {
  summary: Summary
  deleteSummary: (id:number) => void
  toggleForm : (form: formType) => void 
  renderUpdateForm: (id: number) => void
}

interface ISummaryState {
  hovered: boolean
}

class SummaryDisplay extends Component<ISummaryProps, ISummaryState> {
  state: ISummaryState = {
    hovered : false
  }

  handleHovered = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.type == "mouseenter") {
      this.setState({hovered: true})
    } else {
      this.setState({hovered: false})
    }
  }

  formatAchievement = () => {
    const sentences = this.props.summary.summaryDetails.split("\n")
    const paragraph = sentences.map(elem => {
      return <p key={elem}>{elem}</p>
    })

    return paragraph
    
  }

  render() {
    return (
      <div>
        <div className="border-2" onMouseLeave={this.handleHovered} onMouseEnter={this.handleHovered}>
          <h4 className="text-xl font-semibold">{this.props.summary.summaryType}</h4>
          {this.formatAchievement()}
        </div>
        <div>
          <button onClick={() => this.props.renderUpdateForm(this.props.summary.id)}>Update</button>
          <button onClick={() => this.props.deleteSummary(this.props.summary.id)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default SummaryDisplay