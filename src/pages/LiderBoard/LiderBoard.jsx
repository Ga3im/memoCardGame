import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { SelectLevelPage } from "../SelectLevelPage/SelectLevelPage";
import styles from "./LiderBoard.module.css";
import { useContext, useEffect, useState } from "react";
import { getList } from "../../api";
import hardMod from './img/hardMod.png';
import activehardMod from './img/activeHardMod.png';
import Super from './img/super.png';
import  activeSuper from './img/activeSuper.png';
import { EasyModeContext } from "../../context/context";


export const LiderBoard = () => {
  let { alahomora, setAlahomora, superGame, setSuperGame } =
  useContext(EasyModeContext);
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    getList().then((res) => {
      setLeaders(res.leaders);
    });
  }, []);

  const again = () =>{
    setAlahomora((alahomora = 2));
    setSuperGame((superGame = 1));
  }

  leaders.sort(function (a, b) {
    return a.time - b.time;
  });

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <p className={styles.title}>Лидерборд</p>
        <Link to={"/"} element={<SelectLevelPage />}>
          <Button onClick={again}>Начать игру</Button>
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
                  {leader.achievements.includes(1) ? <div className={styles.tooltip}><img src={activehardMod} alt="" /><span className={styles.tooltiptext}>Игра пройдена в сложном режиме</span></div>: <img src={hardMod} alt="" />}
                  {leader.achievements.includes(2) ? <div className={styles.tooltip1}><img src={activeSuper} alt="" /><span className={styles.tooltiptext}>Игра пройдена без супер-сил</span></div> : <img src={Super} alt="" />}
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
