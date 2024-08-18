// src/components/UnitConverter.js
import React, { useState } from 'react';
import { Layout, Typography, Tabs, Card, Row, Col, Button, Select, Input } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import './unitconvertor.css';

const { Content } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const unitTypes = {
  Length: ['Meter', 'Kilometer', 'Centimeter', 'Millimeter', 'Mile', 'Yard', 'Foot', 'Inch'],
  Temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
  Weight: ['Kilogram', 'Gram', 'Milligram', 'Pound', 'Ounce'],
  Volume: ['Liter', 'Milliliter', 'Cubic Meter', 'Gallon', 'Quart', 'Pint', 'Cup'],
  Area: ['Square Meter', 'Square Kilometer', 'Square Mile', 'Square Yard', 'Square Foot', 'Acre', 'Hectare'],
};

const UnitConverter = () => {
  const [activeTab, setActiveTab] = useState('Length');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setFromUnit('');
    setToUnit('');
    setFromValue('');
    setToValue('');
  };

  const handleCalculate = () => {
    // Placeholder conversion function
    const convertedValue = parseFloat(fromValue) * 2;
    setToValue(convertedValue.toFixed(2));
  };

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setFromValue(toValue);
    setToValue(fromValue);
  };

  return (
    <Layout className="unit-converter-layout">
      <Content className="unit-converter-content">
        <Card className="converter-card">
          <Title level={2} className="converter-title">Unit Converter</Title>
          <Tabs activeKey={activeTab} onChange={handleTabChange}>
            {Object.keys(unitTypes).map((type) => (
              <TabPane tab={type} key={type} />
            ))}
          </Tabs>
          <div className="converter-inputs">
            <div className="input-group">
              <label>From</label>
              <Input
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                placeholder="Enter value"
              />
              <Select
                value={fromUnit}
                onChange={(value) => setFromUnit(value)}
                placeholder="Select unit"
              >
                {unitTypes[activeTab].map((unit) => (
                  <Option key={unit} value={unit}>{unit}</Option>
                ))}
              </Select>
            </div>
            <Button 
              icon={<SwapOutlined />} 
              onClick={handleSwap}
              className="swap-button"
            />
            <div className="input-group">
              <label>To</label>
              <Input
                value={toValue}
                readOnly
                placeholder="Converted value"
              />
              <Select
                value={toUnit}
                onChange={(value) => setToUnit(value)}
                placeholder="Select unit"
              >
                {unitTypes[activeTab].map((unit) => (
                  <Option key={unit} value={unit}>{unit}</Option>
                ))}
              </Select>
            </div>
          </div>
          <Button type="primary" onClick={handleCalculate} className="calculate-button">
            Calculate
          </Button>
        </Card>
      </Content>
    </Layout>
  );
};

export default UnitConverter;