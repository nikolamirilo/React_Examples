import React from "react";
import { Card } from "../components";
import { usePlayers } from "../context/PlayersContext";
import { useLoader } from "../hooks/useLoader";
import { BallTriangle } from "react-loader-spinner";

const Home = () => {
  let { players } = usePlayers();
  const { loading } = useLoader();
  if (loading)
    return (
      <div
        className="loader d-flex justify-content-center align-items-center"
        style={{ height: "100vh", backgroundColor: "black" }}
      >
        <BallTriangle height={150} width={150} timeout={2000} color="blue" />
      </div>
    );
  return (
    <div className="home container p-5">
      <div className="row col-12 d-flex justify-content-center align-items-center flex-row p-5">
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
    </div>
  );
};

export default Home;
