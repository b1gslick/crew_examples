import { ElemProps } from "./elem";

const HeavyElem = (props: ElemProps) => {
  return (
    <div
      className="elem"
      style={{
        width: 150,
        height: 150,
        background: "black",
        backgroundColor: "white",
        padding: 10,
        margin: 10,
      }}
    >
      <div>
        <img
          src={window.location.origin + "/K6-logo.svg.png"}
          alt-text="k6log"
        ></img>
      </div>
      {props.id}
    </div>
  );
};

export default HeavyElem;
