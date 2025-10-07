import { useState } from 'react';
import './App.scss';
import type { SessionStatus } from './types';
import Standings from './components/Standings/Standings';
import sessionStatus from './assets/session-status.json';

function App() {
  const [raceData, setRaceData] = useState<SessionStatus[]>();

  function updateData() {
    setRaceData(sessionStatus as SessionStatus[]);
  }

  return (
    <div className='lmu-overlay'>
      <Standings
        raceData={raceData}
        updateData={updateData}
      />
    </div>
  );
}

export default App;
