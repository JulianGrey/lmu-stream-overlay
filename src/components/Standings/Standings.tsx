import styles from './Standings.module.scss';
import type { StandingsProps } from '../../types';

export default function Standings({raceData, updateData}: StandingsProps) {
  return (
    <>
      <ul className={styles.standings}>
        {
          raceData && raceData.map((driver, index) => (
            <li key={(index + 1)} className={styles.row}>
              <div className={styles.position}>{driver.position}</div>
              <div className={styles['car-class']}>{driver.carClass}</div>
              <div className={styles['driver-name']}>{driver.driverName}</div>
              {(driver.lapsBehindLeader < 1) && (
                <div className={styles['time-behind-leader']}>-{driver.timeBehindLeader.toFixed(2)}</div>
              )}
              {(driver.lapsBehindLeader > 0) && (
                <div className={styles['time-behind-leader']}>-{driver.lapsBehindLeader.toFixed(0)} laps</div>
              )}
            </li>
          ))
        }
      </ul>
      <button onClick={updateData}>Display data</button>
    </>
  );
}

