
import type { StandingsProps } from '../../types';

export default function Standings({raceData, updateData}: StandingsProps) {
  return (
    <>
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
    </>
  );
}

