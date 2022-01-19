import React, {Component} from "react"

import format from "date-fns/format"

class ProfessionalInfoDisplay extends Component {
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
          <h3 className="font-semibold text-2xl">Baker</h3>
          <p>{this.dateFormat("2014-03-12")} -{this.dateFormat("2014-03-12")}</p>
        </div>
        <h4 className="italic text-sm">ABC company, Singapore 123123</h4>
        <p>Hello I'm a baker</p>
      </div>
    )
  }
}


export default ProfessionalInfoDisplay