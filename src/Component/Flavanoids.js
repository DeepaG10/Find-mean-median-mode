import React, { Component } from "react";
import jsondata from "../statics/Wine-Data.json";
class FlavanoidsStatistics extends Component {
  constructor(props) {
    super(props);

    // Assuming this is your dataset, replace it with your actual data
    this.data = jsondata;
  }

  calculateStatistics() {
    const classes = [...new Set(this.data.map((item) => item.Alcohol))];

    const statistics = {
      Mean: {},
      Median: {},
      Mode: {},
    };

    classes.forEach((clazz) => {
      const classData = this.data.filter((item) => item.Alcohol === clazz);
      const flavanoids = classData.map((item) => {
        return item.Flavanoids;
      });

      // Calculate Mean
      let sum = 0;
      for (const value of flavanoids) {
        sum += parseFloat(value);
      }
      const mean = sum / flavanoids.length;
      statistics.Mean[clazz] = mean.toFixed(3);

      // Calculate Median
      const sortedFlavanoids = flavanoids.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedFlavanoids.length / 2);
      const median =
        sortedFlavanoids.length % 2 === 0
          ? (sortedFlavanoids[middle - 1] + sortedFlavanoids[middle]) / 2
          : sortedFlavanoids[middle];
      statistics.Median[clazz] = median.toFixed(3);

      // Calculate Mode
      const modeMap = {};
      let maxCount = 0;
      let mode = null;
      for (const value of flavanoids) {
        modeMap[value] = (modeMap[value] || 0) + 1;
        if (modeMap[value] > maxCount) {
          maxCount = modeMap[value];
          mode = value;
        }
      }
      statistics.Mode[clazz] = mode.toFixed(3);
    });

    return statistics;
  }

  render() {
    const statistics = this.calculateStatistics();
    const classes = Object.keys(statistics.Mean);

    return (
      <div>
        <h1>Property “Flavanoids” for each point of the dataset. </h1>
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              {classes.map((clazz) => (
                <th key={clazz}>Class {clazz}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {console.log(statistics)}
            {Object.keys(statistics).map((measure) => (
              <tr key={measure}>
                <td>{measure}</td>
                {classes.map((clazz) => (
                  <td key={clazz}>{statistics[measure][clazz]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FlavanoidsStatistics;
