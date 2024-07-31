import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { SelectLevelPage } from "../SelectLevelPage/SelectLevelPage";
import styles from "./LiderBoard.module.css";
import { useEffect, useState } from "react";
import { getList } from "../../api";

export const LiderBoard = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    getList().then((res) => {
      setLeaders(res.leaders);
    });
  }, []);

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
              <p>Позиция</p>
              <p>Пользователь</p>
              <p>Время</p>
            </div>
          </li>
          {leaders.map((leader) => (
            <li>
              <div className={styles.listContainer}>
                <p># {leader.id}</p>
                <p>{leader.name}</p>
                <p>{leader.time} сек</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
