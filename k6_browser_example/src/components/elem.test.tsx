import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";
import Elem from "./elem";

expect.extend(toHaveNoViolations);

it("should demonstrate this matcher`s usage", async () => {
  const { container } = render(<Elem id={0}></Elem>);
  expect(await axe(container)).toHaveNoViolations();
});
