import { measureRenders } from "reassure";
import ElemList, { ElemsListProps } from "./elem_list";

test.each([1, 10, 100])(
  "Element List render with %i notes",
  async (index) => {
    const elementList: ElemsListProps = {
      elems: [
        {
          id: 0,
        },
      ],
    };

    const elem = {
      id: 0,
    };

    for (let i = 1; i < index; i++) {
      elem.id = i;
      elementList.elems.push(elem);
    }

    await measureRenders(<ElemList {...elementList} />);
  },
  50000,
);
