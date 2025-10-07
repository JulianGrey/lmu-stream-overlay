import { useState } from 'react';
import './App.scss';
import sessionStatus from './assets/session-status.json';

interface SessionStatus {
  bestLapTime: number,
  carClass: string,
  driverName: string,
  lapsBehindLeader: number,
  lapsBehindNext: number,
  lapsCompleted: number,
  pitting: boolean,
  timeBehindLeader: number,
  timeBehindNext: number,
}

function App() {
  const [raceData, setRaceData] = useState<SessionStatus[]>();

  function updateData() {
    setRaceData(sessionStatus as SessionStatus[]);
  }

  return (
    <div className='lmu-overlay'>
      <div>
        <ul>
          {
            raceData && raceData.map((driver, index) => (
              <li key={index} className='row'>
                <div className='position'></div>
                <div className='car-class'>{driver.carClass}</div>
                <div className='driver-name'>{driver.driverName}</div>
                {(driver.lapsBehindLeader < 1) && (
                  <div className='time-behind-leader'>-{driver.timeBehindLeader} laps</div>
                )}
                {(driver.lapsBehindLeader > 0) && (
                  <div className='time-behind-leader'>-{driver.lapsBehindLeader}</div>
                )}
              </li>
            ))
          }
        </ul>
      </div>
      <button onClick={updateData}>Display data</button>
    </div>
  );
}

export default App;
