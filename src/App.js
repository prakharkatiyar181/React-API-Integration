import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./components/FetchRandomUser";
import MyForm from "./components/MyForm";

class App extends Component {
  state = {
    visible: true,
    evisible: true
  };


  render() {
    return (
      <div className="App">
        {this.state.visible ? (<FetchRandomUser />) : (<MyForm />)}
        {this.state.evisible ? (<button onClick={() => {
          this.setState({visible : false});
          this.setState({evisible : false});
        }}>Edit Profile</button>):null}
      </div>
    );
  }
}

export default App;