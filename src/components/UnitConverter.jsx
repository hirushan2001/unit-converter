// src/components/UnitConverter.js
import React, { useState } from 'react';
import { Layout, Typography, Tabs, Card, Row, Col } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import UnitInput from './UnitInput';
import './unitconvertor.css';

const { Content } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;

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

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setFromUnit('');
    setToUnit('');
    setFromValue('');
  };

  return (
    <Layout>
      <Content style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
          Unit Converter
        </Title>
        <Card>
          <Tabs activeKey={activeTab} onChange={handleTabChange}>
            {Object.keys(unitTypes).map((type) => (
              <TabPane tab={type} key={type} />
            ))}
          </Tabs>
          <Row gutter={16} align="middle">
            <Col xs={24} sm={11}>
              <UnitInput
                label="From"
                value={fromValue}
                onValueChange={(value) => setFromValue(value)}
                unit={fromUnit}
                onUnitChange={(value) => setFromUnit(value)}
                unitOptions={unitTypes[activeTab]}
              />
            </Col>
            <Col xs={24} sm={2} style={{ textAlign: 'center' }}>
              <SwapOutlined style={{ fontSize: '24px' }} />
            </Col>
            <Col xs={24} sm={11}>
              <UnitInput
                label="To"
                value=""
                onValueChange={() => {}}
                unit={toUnit}
                onUnitChange={(value) => setToUnit(value)}
                unitOptions={unitTypes[activeTab]}
                readOnly
              />
            </Col>
          </Row>
        </Card>
      </Content>
    </Layout>
  );
};

export default UnitConverter;