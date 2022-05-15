import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { mockRobots } from "../../redux/mocks/mockRobots";
import DetailedRobot from "./DetailedRobot";

describe("Given the DetailedRobot component", () => {
  describe("When instantiated with the Larry the Boy robot as its parameter", () => {
    test("Then its name will be rendered on screen, as well as its description", () => {
      const mockRobot = mockRobots[0];
      render(
        <BrowserRouter>
          <DetailedRobot robot={mockRobot} />
        </BrowserRouter>
      );

      const expectedName = `${mockRobot.name}`;
      const expectedDescription = `${mockRobot.description}`;
      const searchedName = screen.getByText(expectedName);
      const searchedDescription = screen.getByText(
        `Description: ${expectedDescription}`
      );

      expect(searchedName.textContent).toMatch(expectedName);
      expect(searchedDescription.textContent).toMatch(expectedDescription);
    });
  });
});
