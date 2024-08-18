// src/components/UnitInput.js
import React from 'react';
import { Input, Select } from 'antd';
import './UnitInput.css';

const { Option } = Select;

const UnitInput = ({ label, value, onValueChange, unit, onUnitChange, unitOptions, readOnly }) => {
  return (
    <div className="unit-input-wrapper">
      <label className="unit-input-label">{label}</label>
      <div className="unit-input-container">
        <Input
          type="number"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          readOnly={readOnly}
          className="unit-input"
        />
        <Select
          value={unit}
          onChange={onUnitChange}
          placeholder="Select unit"
          className="unit-select"
        >
          {unitOptions.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default UnitInput;