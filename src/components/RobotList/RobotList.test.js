import { render, screen } from "@testing-library/react";
import { mockRobots } from "../../redux/mocks/mockRobots";
import RobotList from "./RobotList";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => {
    return [
      { _id: 1, name: "Cosa fake para hacer 1", done: false },
      { _id: 2, name: "Cosa fake para hacer 2", done: false },
    ];
  },
  useDispatch: () => {
    return mockUseDispatch;
  },
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockUseDispatch,
  useSelector: () => {
    return mockRobots;
  },
}));

describe("Given the RobotList component", () => {
  describe("When instantiated", () => {
    test("Then as many cards as there are objects in the Robot array will be rendered", () => {
      render(<RobotList />);

      const expectedNumberOfCards = mockRobots.length;
      const searchedCards = screen.getAllByRole("listitem");

      expect(searchedCards).toHaveLength(expectedNumberOfCards);
    });
  });
});
