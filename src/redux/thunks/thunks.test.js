import { server } from "../../mocks/server";
import loadRobotsThunk from "./thunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given the loadRobotsThunk function", () => {
  describe("When instantiated", () => {
    test("Then dispatch will have been called", async () => {
      const thunk = await loadRobotsThunk();
      const dispatch = jest.fn();
      await thunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
