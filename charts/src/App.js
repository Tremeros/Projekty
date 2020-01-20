import React from 'react';
import Chart from "react-apexcharts";
import Bar from "./chart";

class App extends React.Component {
 

  render() {
    return (
      <div className="container">
        <h1>Chart</h1>
        <Bar/>
      </div>
    );
  }
}

export default App;
