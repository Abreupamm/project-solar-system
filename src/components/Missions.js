import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title key="2" headline="Missões" />
        {
          missions.map((item) => {
            const { name: n, year: y, country: c, destination: d } = item;
            return (
              <MissionCard
                key={ n }
                name={ n }
                year={ y }
                country={ c }
                destination={ d }
              />
            );
          })
        }
      </div>
    );
  }
}

export default Missions;
