import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import { mockRobots } from "../../redux/mocks/mockRobots";
import Robot from "./Robot";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
  useSelector: () => {
    return mockRobots;
  },
}));

describe("Given the Robot component", () => {
  describe("When instantiated with the Larry the Boy robot as its parameter", () => {
    test("Then its name will be rendered on screen", () => {
      const mockRobot = mockRobots[0];
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Robot robot={mockRobot} />
          </BrowserRouter>
        </Provider>
      );

      const expectedText = `${mockRobot.name}`;
      const searchedItem = screen.getByText(expectedText);

      expect(searchedItem.textContent).toMatch(expectedText);
    });
  });
});
