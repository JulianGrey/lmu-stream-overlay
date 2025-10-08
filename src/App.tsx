import { useEffect, useState } from 'react';
import './App.scss';
import type { StandingsStatus } from './types';
import { getStandings } from './services/api';
import Standings from './components/Standings/Standings';

function App() {
  const [standingsData, setStandingsData] = useState<StandingsStatus[]>();

  useEffect(() => {
    updateData();
  }, []);

  async function updateData() {
    try {
      const data = await getStandings();

      setStandingsData(data as StandingsStatus[]);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  return (
    <div className='lmu-overlay'>
      <Standings standingsData={standingsData} />
    </div>
  );
}

export default App;
