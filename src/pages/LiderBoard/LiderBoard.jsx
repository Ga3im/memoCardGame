import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { SelectLevelPage } from "../SelectLevelPage/SelectLevelPage";
import styles from "./LiderBoard.module.css";
import { useContext, useEffect } from "react";
import { getList } from "../../api";
import { LeaderBoardContext } from "../../context/context";

export const LiderBoard = () => {
const {liders, setLiders} = useContext(LeaderBoardContext)

    useEffect(() => {
    getList()
      .then((res) => {
        setLiders(res.leaders);
      })
      .catch(() => {
        console.log("ошибка");
      });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Лидерборд</p>
        <Link to={"/"} element={<SelectLevelPage />}>
          <Button>Начать игру</Button>
        </Link>
      </div>
      <div>
        <ul className={styles.list}>
          <li>
            <div className={styles.listContainer}>
              <p>Позиция</p>
              <p>Пользователь</p>
              <p>Время</p>
            </div>
          </li>
          {liders.map((leader) => (
            <li key={leader.id}>
              <div className={styles.listContainer}>
                <p>{leader.id}</p>
                <p>{leader.name}</p>
                <p>{leader.time} сек</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
