import { useState, useEffect, useContext, createContext } from "react";
import data from "../data.json";

const PlayersContext = createContext();

export const usePlayers = () => {
  return useContext(PlayersContext);
};

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(data.players);
  }, []);

  return <PlayersContext.Provider value={{ players }}>{children}</PlayersContext.Provider>;
};
