// src/components/UnitConverter.js
import React, { useState } from 'react';
import UnitInput from './UnitInput';

const conversions = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701,
  },
  weight: {
    gram: 1,
    kilogram: 0.001,
    milligram: 1000,
    pound: 0.00220462,
    ounce: 0.035274,
  },
  temperature: {
    celsius: (val) => val,
    fahrenheit: (val) => (val * 9/5) + 32,
    kelvin: (val) => val + 273.15,
  }
};

const UnitConverter = () => {
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [unitType, setUnitType] = useState('length');

  const handleValueChange = (e) => setValue(e.target.value);
  const handleFromUnitChange = (e) => setFromUnit(e.target.value);
  const handleToUnitChange = (e) => setToUnit(e.target.value);
  const handleUnitTypeChange = (e) => setUnitType(e.target.value);

  const convertValue = () => {
    if (unitType === 'temperature') {
      const baseValue = conversions.temperature[fromUnit](parseFloat(value));
      if (toUnit === 'celsius') return baseValue;
      if (toUnit === 'fahrenheit') return (baseValue * 9/5) + 32;
      if (toUnit === 'kelvin') return baseValue + 273.15;
    } else {
      const baseValue = value * conversions[unitType][fromUnit];
      return baseValue / conversions[unitType][toUnit];
    }
  };

  return (
    <div>
      <h1>Unit Converter</h1>
      <div>
        <label>
          Select Unit Type:
          <select value={unitType} onChange={handleUnitTypeChange}>
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temperature">Temperature</option>
          </select>
        </label>
      </div>
      <UnitInput 
        value={value} 
        onValueChange={handleValueChange} 
        unit={fromUnit} 
        onUnitChange={handleFromUnitChange} 
        unitOptions={Object.keys(conversions[unitType])} 
      />
      <UnitInput 
        value={convertValue()} 
        unit={toUnit} 
        onUnitChange={handleToUnitChange} 
        unitOptions={Object.keys(conversions[unitType])} 
        readOnly 
      />
    </div>
  );
};

export default UnitConverter;
