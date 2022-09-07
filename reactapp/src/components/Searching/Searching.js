import React, { useState } from 'react';

const Searching = () => {
  const dataList = [
    {
      "id": 1,
      "name": "cerulean",
      "year": 2000,
     
    },
    {
      "id": 2,
      "name": "fuchsia rose",
      "year": 2001,
   
    },
    {
      "id": 3,
      "name": "true red",
      "year": 2002,
   
    }
  ];

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  // exclude column list from filter
  const excludeColumns = [];

  // handle change event of search input
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

  return (
    <div className="App">
      <a href="https://www.cluemediator.com">Clue Mediator</a><br /><br />
      Search: <input
        style={{ marginLeft: 5 }}
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={e => handleChange(e.target.value)}
      />
      <div className="box-container">
        {data.map((d, i) => {
          return <div key={i} className="box" style={{ backgroundColor: d.color }}>
            <b>Name: </b>{d.name}<br />
            <b>Year: </b>{d.year}<br />
            <b>Color: </b>{d.color}<br />
            <b>Pantone value: </b>{d.pantone_value}
          </div>
        })}
        <div className="clearboth"></div>
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
    </div>
  );
}

export default Searching;