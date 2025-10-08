import { useEffect, useState } from 'react';
import './App.scss';
import type { StandingsStatus } from './types';
import Standings from './components/Standings/Standings';
import sessionStatus from './assets/session-status.json';

function App() {
  const [standingsData, setStandingsData] = useState<StandingsStatus[]>();

  useEffect(() => {
    updateData();
  });

  function updateData() {
    setStandingsData(sessionStatus as StandingsStatus[]);
  }

  return (
    <div className='lmu-overlay'>
      <Standings standingsData={standingsData} />
    </div>
  );
}

export default App;
