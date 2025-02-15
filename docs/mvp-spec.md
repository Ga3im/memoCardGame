# Тех. задание для MVP Мемо

Нужно реализовать карточную игру, смысл которой довольно прост: вам нужно выбрать все пары карт.

[Ссылка на макет (страница «Инструменты разработки»).](https://www.figma.com/file/Xk8ocvZA9NlMmA0szZeI5h/%D0%B1%D0%B0%D0%B7%D0%BE%D0%B2%D1%8B%D0%B9-JS?node-id=4325%3A2)

## Описание игры

Вам предстоит реализовать следующий функционал: выбор сложности, основную логику игры, вывод результата. Ниже вы найдёте подробное описание каждого пункта.

### Логика выбора сложности

Есть три уровня сложности: **легкий, средний, сложный**. От уровня сложности зависит количество карточек, которые будут показаны пользователю на игровом экране.
Количество карточек для каждого уровня сложности можете назначать и свои или выбрать готовый пресет.

Предлагаем следующее пресеты:
  - Легкий уровень - 6 карточек (3 пары)
  - Средний уровень - 12 карточек (6 пар)
  - Сложный уровень - 18 карточек (9 пар)

Как только уровень сложности выбран, игроку показывается на игровой поле.

### Игровое поле

Вам предстоит написать логику генерации необходимого количества карточек.
Карты обыкновенные игральные:

- 4 масти (черви, бубны, крести, пики)
- 9 рангов (6, 7, 8, 9, 10, Q, K, J, A)
  Когда карточки будут сгенерированы, их нужно перетасовать и показать игроку на 5 секунд, после чего карточки перевернуть рубашками вверх.

### Игровая механика

Когда пользователь кликает на карточку, она переворачивается и показывает ранг и масть. Необязательно делать анимацию перевода.
Когда игрок кликает на предположительную пару, то игра осуществляет сверку карточек:

- Если карточки совпадают ⇒ игра продолжается
- Если карточки не совпадают ⇒ игра заканчивается
  Если были найдены все пары, игрок побеждает.

### Финал игры

Каким бы ни был финал игры, пользователю показывается всплывающее окно со:

- Статусом (проиграл / выиграл).
- Временем, затраченным на игру.
- Кнопкой, предлагающей сыграть снова.
