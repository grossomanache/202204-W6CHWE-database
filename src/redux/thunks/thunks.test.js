import { server } from "../../mocks/server";
import { mockRobots } from "../mocks/mockRobots";
import { loadRobotsThunk, loadRobotByIdThunk } from "./thunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadRobotsThunk function", () => {
  describe("When instantiated, having mockRobots in the database", () => {
    test("Then dispatch will have been called, returning mockRobots", async () => {
      const thunk = await loadRobotsThunk();
      const dispatch = jest.fn().mockReturnValue(mockRobots);
      await thunk(dispatch);
      expect(dispatch).toHaveReturnedWith(mockRobots);
    });
  });
});

describe("Given the loadRobotById function", () => {
  describe("When instantiated with the id 1", () => {
    test("Then dispatch will be called, returning the Larry the boy robot", async () => {
      const searchedId = 1;
      const thunk = await loadRobotByIdThunk(searchedId);
      const larryRobot = mockRobots[0];
      const dispatch = jest.fn().mockReturnValue(larryRobot);
      await thunk(dispatch);
      expect(dispatch).toHaveReturnedWith(larryRobot);
    });
  });
});
