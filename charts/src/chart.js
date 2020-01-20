import React from 'react';
import Chart from "react-apexcharts";

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      datas: [],
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
       
      ]
    };
  }

  
   onChangeHandle = (e) => {
     this.setState({input: e.target.value});
     console.log(this.state.input);
   }

   addData = () => {
    this.arr = [...this.state.datas, this.state.input];
    this.setState({datas: this.arr, input: ""});
    
   }

   generateChart =(e) => {
     e.preventDefault();
     this.arr2 = [...this.state.series, {name: "series-2", data: this.state.datas}]
   this.setState({series: this.arr2, datas: []})
   }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
        <input type="text" value={this.state.input} onChange={this.onChangeHandle}></input>
        <button className="btn btn-primary" onClick={this.addData}>Add data</button>
        <button className="btn btn-primary" onClick={this.generateChart}>Generate</button>
        <div>{this.state.text}</div>
        <ul>
          {this.state.datas.map((el, index) => {
            return <li key={index}>{el}</li>
          })}
        </ul>
      </div>
    );
  }
}


export default Bar;