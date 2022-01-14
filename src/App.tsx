import React, {Component} from "react";
import GlobalStyle from "./components/ui/globalStyle"

import Header from "./components/Header"
import Main from "./components/Main"

class App extends Component {

  render() {

    return (
      <>
        <GlobalStyle />
        <Header />
        <div className="mx-auto h-[100%]">
          <Main />
        </div>
      </>
    )
   
  }
}

export default App;