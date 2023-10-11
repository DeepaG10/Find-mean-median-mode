# Flavanoids Statistics Component
The "Flavanoids Statistics" component is a React class component that calculates and displays statistics for the "Flavanoids" property in a given dataset. This README provides an overview of the component and how to use it.

<img width="726" alt="image" src="https://github.com/DeepaG10/Find-mean-median-mode/assets/145286265/796528a8-5736-47c5-a0d8-bce41c2d9872">

# Table of Contents
* Introduction
* Prerequisites
* Installation
* Usage
* Component Overview
* License
  
# Introduction
The "Flavanoids Statistics" component is designed to analyze a dataset containing wine data. It calculates and displays statistics such as the mean, median, and mode for the "Flavanoids" property, classifying the data based on the "Alcohol" property. The component uses React to create a dynamic and interactive display of the statistics.

# Prerequisites
Before using this component, you should have the following prerequisites:

* Node.js and npm (Node Package Manager) installed on your development environment.
* A React project in which you want to integrate this component.
* A dataset in JSON format containing wine data. In the provided code, the dataset is imported from a file named "Wine-Data.json." Make sure you have a similar dataset or update the import statement accordingly.

# Installation
To use the "Flavanoids Statistics" component in your React project, follow these steps:

* Copy the code of the component into a new or existing React component file.
* Make sure you have the wine dataset (JSON file) available at the specified path or update the import statement to point to your dataset.
* Integrate the component into your project by importing it and rendering it where needed.
Example usage in a React component:

javascript
```
import React from 'react';
import FlavanoidsStatistics from './FlavanoidsStatistics'; // Update the import path

function App() {
  return (
    <div>
      <FlavanoidsStatistics />
    </div>
  );
}
export default App;
```
# Usage
Once you have integrated the component into your project, it will display statistics for the "Flavanoids" property based on the "Alcohol" classes. When you render the component, it will automatically calculate and display the mean, median, and mode for each class.

To use the component effectively, ensure that the dataset is correctly imported, and the component is rendered within your application.

# Component Overview
The "Flavanoids Statistics" component provides the following functionality:

* Data Import: It imports a JSON dataset containing wine data, assuming it is located at the specified path. Make sure to replace the dataset with your actual data.

* Statistics Calculation: The component calculates statistics for the "Flavanoids" property based on unique "Alcohol" classes. It calculates the mean, median, and mode for each class and stores the results in an object.

* Dynamic Display: The component dynamically displays the statistics in a tabular format, making it easy to compare the results for different classes. It displays the mean, median, and mode for each class in separate columns.

# License
This component is provided under an open-source license. You are free to use and modify it for your projects. Please refer to the license file included with this component for more details.

# Author 
Author: Deepa Gupta

Email: deepa403246@gmail.com




