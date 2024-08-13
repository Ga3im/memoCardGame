import styles from "./EndGameModal.module.css";
import { Button } from "../Button/Button";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { postList } from "../../api";
import { useContext, useEffect, useState } from "react";
import { EasyModeContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export function EndGameModal({
  isWon,
  gameDurationSeconds,
  gameDurationMinutes,
  onClick,
}) {
  const { easy, alahomora, superGame} = useContext(EasyModeContext);

  const title = isWon ? "Вы попали на Лидерборд!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const [addGamer, setAddGamer] = useState({
    id: "",
    name: "Пользователь",
    time: gameDurationSeconds.toString().padStart("2", "0"),
    achievements: [1, 2],
  });

  const nav = useNavigate();

  const addUser = async (e) => {
    e.preventDefault();
    await postList({ ...addGamer });
    nav("/liderBoard");
  };
  useEffect(() => {
    if (easy) {
      setAddGamer({...addGamer, achievements:[2]});
    }
    if (alahomora != 2 || superGame != 1 ) {
      setAddGamer({...addGamer, achievements:[1]})
    }
  }, [easy, alahomora, superGame]);

  const goToLiderbord = () => {
    nav("/liderBoard");
  };

  return (
    <form action="" onSubmit={isWon ? addUser : goToLiderbord}>
      <div className={styles.modal}>
        <img className={styles.image} src={imgSrc} alt={imgAlt} />
        <h2 className={styles.title}>{title}</h2>
        {isWon ? (
          <input
            onChange={(e) => setAddGamer({ ...addGamer, name: e.target.value })}
            className={styles.input}
            placeholder="Пользователь"
            type="text"
            name=""
            id=""
          />
        ) : null}
        <p className={styles.description}>Затраченное время:</p>
        <div className={styles.time}>
          {gameDurationMinutes.toString().padStart("2", "0")}:
          {gameDurationSeconds.toString().padStart("2", "0")}
        </div>
        <Button onClick={onClick}>Начать сначала</Button>
        <button className={styles.btnLeaderBoard} type="submit">
          Перейти к лидерборду
        </button>
      </div>
    </form>
  );
}
