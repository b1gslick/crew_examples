import { axe, toHaveNoViolations } from "jest-axe";
import { render } from "@testing-library/react";
import ElemList, { ElemsListProps } from "./elem_list";

expect.extend(toHaveNoViolations);

it("should demonstrate this matcher`s usage", async () => {
  const Props: ElemsListProps = {
    elems: [{ id: 0 }, { id: 1 }],
  };
  const { container } = render(<ElemList {...Props}></ElemList>);
  expect(await axe(container)).toHaveNoViolations();
});
