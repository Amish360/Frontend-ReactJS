import React from 'react';
import jsonData from './airports.json';


function DataDisplay() {
    return (
        <div className="dataTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>IATA</th>
              <th>City</th>
              <th>Country</th>
              <th>Longitude</th>
              <th>Latitude</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.iata}</td>
                <td>{item.city}</td>
                <td>{item.country}</td>
                <td>{item.longitude}</td>
                <td>{item.latitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default DataDisplay;