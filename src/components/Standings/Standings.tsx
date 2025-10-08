import styles from './Standings.module.scss';
import type { StandingsProps } from '../../types';

export default function Standings({standingsData}: StandingsProps) {
  return (
    <ul className={styles.standings}>
      {
        standingsData && standingsData.map((driver, index) => (
          <li key={(index + 1)} className={styles.row}>
            <div className={styles.position}>{driver.position}</div>
            <div className={styles['car-class']}>{driver.carClass}</div>
            <div className={styles['driver-name']}>{driver.driverName}</div>
            {(driver.lapsBehindLeader < 1) &&
              <div className={styles['time-behind-leader']}>-{driver.timeBehindLeader.toFixed(2)}</div>}
            {(driver.lapsBehindLeader > 0) &&
              <div className={styles['time-behind-leader']}>-{driver.lapsBehindLeader.toFixed(0)} laps</div>
            }
            {
              driver.fuelFraction &&
              <div className={styles['fuel-fraction']}>{(driver.fuelFraction * 100).toFixed(0)}%</div>
            }
          </li>
        ))
      }
    </ul>
  );
}
