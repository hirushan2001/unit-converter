import React, { useState } from 'react';
import './unitconvertor.css';

const UnitConverter = () => {
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [value, setValue] = useState('');

  const units = [
    'Meter', 'Kilometer', 'Centimeter', 'Millimeter', 'Micrometer', 'Nanometer',
    'Mile', 'Yard', 'Foot', 'Inch', 'Light Year'
  ];

  return (
    <div className="container">
      <header>
        <h1>Conversion Calculator</h1>
        <p>
          Use this Conversion Calculator to convert between commonly used units.
          Select the current unit in the left column, the desired unit in the right column,
          and enter a value in the left column to generate the resulting conversion.
        </p>
      </header>

      <div className="tabs">
        <button className="tab active">Length</button>
        <button className="tab">Temperature</button>
        <button className="tab">Area</button>
        <button className="tab">Volume</button>
        <button className="tab">Weight</button>
      </div>

      <div className="converter">
        <div className="field">
          <label>From:</label>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
          </select>
        </div>

        <div className="field">
          <label>To:</label>
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
