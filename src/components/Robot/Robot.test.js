import { screen, render } from "@testing-library/react";

import { mockRobots } from "../../redux/mocks/mockRobots";
import Robot from "./Robot";

describe("Given the Robot component", () => {
  describe("When instantiated with the Larry the Boy robot as its parameter", () => {
    test("Then its name will be rendered on screen", () => {
      const mockRobot = mockRobots[0];
      render(<Robot robot={mockRobot} />);

      const expectedText = `${mockRobot.name}`;
      const searchedItem = screen.getByText(expectedText);

      expect(searchedItem.textContent).toMatch(expectedText);
    });
  });
});
