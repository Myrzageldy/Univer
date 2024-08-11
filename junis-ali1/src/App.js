import React, { useState } from 'react';
import './App.css';
import people from './data';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const foundPerson = people.find(
      person =>
        `${person.first_name} ${person.last_name}`.toLowerCase() === searchTerm.toLowerCase()
    );
    setResult(foundPerson);
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {result ? (
        <div className="header">
          <img src={result.university_logo} alt="University Logo" className="logo" />
          <h1>{`${result.first_name} ${result.last_name}`}</h1>
          <h2>{result.specialty_name}</h2>
          <p>Date of Graduation: {result.graduation_date}</p>
          <div className="signatures">
            <div className="signature">
              <img src="img/подпись1.png" alt="Secretary Signature" className="signature-img" />
              <p>Secretary Signature</p>
              <p>Jane Smith</p>
            </div>
            <div className="signature">
              <img src="img/подпись2.png" alt="President Signature" className="signature-img" />
              <p>President Signature</p>
              <p>Dr. Michael Brown</p>
            </div>
          </div>
          <img src="img/university-stamp.png" alt="University Stamp" className="stamp" />
        </div>
      ) : (
        searchTerm && <p>No results found</p>
      )}
    </div>
  );
};

export default App;
