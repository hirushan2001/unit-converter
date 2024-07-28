// src/components/UnitInput.js
import React from 'react';

const UnitInput = ({ value, onValueChange, unit, onUnitChange, unitOptions, readOnly }) => {
  return (
    <div>
      <input 
        type="number" 
        value={value} 
        onChange={onValueChange} 
        readOnly={readOnly}
      />
      <select value={unit} onChange={onUnitChange}>
        {unitOptions.map((unitOption) => (
          <option key={unitOption} value={unitOption}>
            {unitOption}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UnitInput;
