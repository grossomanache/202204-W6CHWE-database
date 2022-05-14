import { loadRobotsActionCreator } from "./robotsSlice";

describe("Given the loadRobotsActionCreator", () => {
  describe("When instantiated with a parameter of [1,2,3]", () => {
    test("Then it will return the same array", () => {
      const initialArray = [1, 2, 3];
      const createdAction = loadRobotsActionCreator(initialArray);
      const expectedPayload = initialArray;

      expect(createdAction.payload).toEqual(expectedPayload);
    });
  });
});
