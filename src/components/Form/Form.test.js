import { screen, render } from "@testing-library/react";
const { default: Form } = require("./Form");

describe("Given the Form component", () => {
  describe("When instantiated", () => {
    test("Then 5 input boxes will be rendered", () => {
      const expectedTextBoxes = 3;
      const expectedSpinButton = 2;
      render(<Form />);

      const searchedSpinButtons = screen.getAllByRole("spinbutton");
      const searchedTextBoxes = screen.getAllByRole("textbox");

      expect(searchedSpinButtons).toHaveLength(expectedSpinButton);
      expect(searchedTextBoxes).toHaveLength(expectedTextBoxes);
    });
  });
});
