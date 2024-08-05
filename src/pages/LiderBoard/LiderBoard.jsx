import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { SelectLevelPage } from "../SelectLevelPage/SelectLevelPage";
import styles from "./LiderBoard.module.css";
import { useEffect, useState } from "react";
import { getList } from "../../api";
import hardMod from './img/hardMod.png';
import activehardMod from './img/activeHardMod.png';
import Super from './img/super.png';
import  activeSuper from './img/activeSuper.png';


export const LiderBoard = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    getList().then((res) => {
      setLeaders(res.leaders);
    });
  }, []);

  leaders.sort(function (a, b) {
    return a.time - b.time;
  });

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <p className={styles.title}>Лидерборд</p>
        <Link to={"/"} element={<SelectLevelPage />}>
          <Button>Начать игру</Button>
        </Link>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <div className={styles.listContainer1}>
              <p className={styles.poz}>Позиция</p>
              <p className={styles.pol}>Пользователь</p>
              <p className={styles.dos}>Достижения</p>
              <p className={styles.time}>Время</p>
            </div>
          </li>
          {leaders.map((leader, i) => (
            <li key={leader.id}>
              <div className={styles.listContainer}>
                <p className={styles.poz}># {i + 1}</p>
                <p className={styles.pol}>{leader.name}</p>
                <p className={styles.dos}>
                  {leader.achievements[0] === 1 ? <img className={styles.hardMode} src={activehardMod} alt="" /> : <img src={hardMod} alt="" />}
                  {leader.achievements[1] === 2 ? <img src={activeSuper} alt="" /> : <img src={Super} alt="" />}
                </p>
                <p className={styles.time}>{leader.time} сек</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
