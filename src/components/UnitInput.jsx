// src/components/UnitInput.js
import React from 'react';
import { Input, Select, Space } from 'antd';

const { Option } = Select;

const UnitInput = ({ label, value, onValueChange, unit, onUnitChange, unitOptions, readOnly }) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input
        addonBefore={label}
        type="number"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        readOnly={readOnly}
      />
      <Select
        style={{ width: '100%' }}
        value={unit}
        onChange={onUnitChange}
        placeholder="Select unit"
      >
        {unitOptions.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Space>
  );
};

export default UnitInput;