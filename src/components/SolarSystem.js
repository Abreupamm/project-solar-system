import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title key="1" headline="Planetas" />
        {
          Planets.map((element) => {
            const img = element.image;
            const nome = element.name;
            return <PlanetCard key={ nome } planetImage={ img } planetName={ nome } />;
          })
        }
      </div>

    );
  }
}

export default SolarSystem;
