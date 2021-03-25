import axios, { AxiosResponse } from "axios";
import Game from "../interfaces/game";
import addGame from "./addGame";
jest.mock("axios");

describe("addGame", () => {
  it("returns a success message when given a game", async () => {
    const mockGame: Game = {
      name: "Pokemon Sword",
      platform: "Nintendo",
      status: "Complete",
    };
    const mockedResponse: AxiosResponse = {
      data: mockGame,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.post.mockResolvedValue(mockedResponse);

    const response = await addGame(mockGame);

    expect(axios.post).toHaveBeenCalledWith("http://localhost:8000", {
      data: mockGame,
    });
    expect(response).toEqual(mockGame);
  });
});
