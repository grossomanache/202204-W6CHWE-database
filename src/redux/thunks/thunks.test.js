import { server } from "../../mocks/server";
import { loadRobotsThunk, loadRobotByIdThunk } from "./thunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadRobotsThunk function", () => {
  describe("When instantiated", () => {
    test("Then dispatch will have been called", async () => {
      const loadThunk = await loadRobotsThunk();
      const dispatch = jest.fn();
      await loadThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
