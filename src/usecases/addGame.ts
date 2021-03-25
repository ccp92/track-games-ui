import Game from "../interfaces/game";
import axios from "axios";

const addGame = async (game: Game) => {
  try {
    let response = await axios.post("http://localhost:8000", { data: game });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default addGame;
