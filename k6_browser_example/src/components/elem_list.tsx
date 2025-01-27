import { ReactNode } from "react";
import Elem, { ElemProps } from "./elem";
import HeavyElem from "./heavy_elem";

export type ElemsListProps = {
  elems: ElemProps[];
  children?: ReactNode;
};

const ElemList = (props: ElemsListProps) => {
  return (
    <ul
      className="elem_list"
      style={{
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 6,
        margin: 10,
      }}
    >
      {props.elems.map((elem, index) => (
        <li className={`elem-${index}`} key={index}>
          <Elem id={elem.id} key={elem.id} />
          {/* <HeavyElem id={elem.id} key={elem.id} /> */}
        </li>
      ))}
      {props.children}
    </ul>
  );
};

export default ElemList;
