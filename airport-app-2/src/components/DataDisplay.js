

import React, { useState,useEffect } from 'react';
import jsonData from './airports.json';


function DataDisplay() {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedField, setSelectedField] = useState('name'); 
  const [wholeWord, setWholeWord] = useState(false);
  const [selectedSortingField, setSelectedSortingField] = useState('name');

  

  useEffect(() => {
    setOriginalData(jsonData);
    setData(jsonData);
  }, []);


  useEffect(() => {
    if (searchQuery === '') {
      setData(originalData);
      return; // Early return here to prevent further filtering
    }

    let filtered = originalData.filter(item =>
      wholeWord
        ? item[selectedField].toLowerCase() === searchQuery.toLowerCase()
        : item[selectedField].toLowerCase().includes(searchQuery.toLowerCase())
    );

    setData(filtered);
   }, [searchQuery, selectedField, wholeWord, originalData]);
  
   const handleSort = () => {
    let sortedData;
  
    if (selectedSortingField === 'name' || selectedSortingField === 'iata' || selectedSortingField === 'city' || selectedSortingField === 'country') {
      sortedData = [...data].sort((a, b) => {
        const aValue = a[selectedSortingField].toLowerCase();
        const bValue = b[selectedSortingField].toLowerCase();
        return aValue.localeCompare(bValue);
      });
    } else if (selectedSortingField === 'longitude' || selectedSortingField === 'latitude') {
      sortedData = [...data].sort((a, b) => {
        const aValue = parseFloat(a[selectedSortingField]);
        const bValue = parseFloat(b[selectedSortingField]);
        return aValue - bValue;
      });
    }
  
    setData(sortedData);
  };
  

  const handleResetSort = () => {
    setData(originalData);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setData(originalData);
  };

   


    return (
        <div className="dataTable">
         <select
            value={selectedField}
            onChange={e => setSelectedField(e.target.value)}
          >
          <option value="iata">IATA</option>
          <option value="name">Name</option>
          <option value="country">Country</option>
          <option value="city">City</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${selectedField}`}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <label>
          Search Whole Word:
          <input
            type="checkbox"
            checked={wholeWord}
            onChange={() => setWholeWord(!wholeWord)}
          />
          <button onClick={handleClearSearch}>Clear Search</button>
        </label>
        <br/>
        <label>Select The column from which you want to sort the data:</label>
        <select
          value={selectedSortingField}
          onChange={e => setSelectedSortingField(e.target.value)}
        >
        <option value="name">Name</option>
        <option value="iata">IATA</option>
        <option value="city">City</option>
        <option value="country">Country</option>
        <option value="longitude">Longitude</option>
        <option value="latitude">Latitude</option>
        </select>
        <button onClick={handleSort}>Sort</button>
        <button onClick={handleResetSort}>Reset Sort</button>
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
            {data.map(item => (
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