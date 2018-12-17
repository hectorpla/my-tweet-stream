import * as React from "react";

import NavBar from "./NavBar";
import StreamPage from "./StreamPage";

class App extends React.Component {
  public render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavBar />
        <StreamPage />
      </div>
    );
  }
}

export default App;
