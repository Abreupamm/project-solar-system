import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title key="1" headline="Planetas" />
      </div>

    );
  }
}

export default SolarSystem;
