import React from "react";
import { Card } from "../components";
import { usePlayers } from "../context/PlayersContext";

const Home = () => {
  let { players } = usePlayers();
  return (
    <div className="home">
      {players &&
        players.map((player) => {
          return (
            <Card
              image={player.front_image}
              name={player.name}
              description={player.team}
              data={`PPG: ${player.stat_ppg}, APG: ${player.stat_apg}, RPG: ${player.stat_rpg}`}
            />
          );
        })}
    </div>
  );
};

export default Home;
