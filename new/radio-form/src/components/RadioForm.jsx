import React, {useState} from "react";

export const RadioForm = () => {
  const games = ["cricket", "football", "hockey"];
  const days = ["weekday", "weekend"];

  const [selectedGame, setSelectedGame] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const handleGameChange = (game) => {
    setSelectedGame(game);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  return (
    <main>
      <h2>Games</h2>
      {games &&
        games.map((game, index) => {
          return (
            <div key={index}>
              <label htmlFor={game} id="game_label">
                {game}
              </label>
              <input
                type="radio"
                name={game}
                value={game}
                id={game}
                aria-labelledby="game_label"
                checked={selectedGame === game}
                onChange={() => handleGameChange(game)}
              />
            </div>
          );
        })}
      <h2>Days</h2>
      {days &&
        days.map((day, index) => {
          return (
            <div key={index}>
              <label htmlFor="day_radio" id="day_label">
                {day}
              </label>
              <input
                type="radio"
                name={day}
                value={day}
                id="day_radio"
                aria-labelledby="day_label"
                checked={selectedDay === day}
                onChange={() => handleDayChange(day)}
              />
            </div>
          );
        })}
      <section>
        {selectedDay && selectedGame && (
          <>
            <h3>{selectedGame}</h3>
            <h3>{selectedDay}</h3>
          </>
        )}
      </section>
    </main>
  );
};
