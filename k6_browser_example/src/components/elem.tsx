export type ElemProps = {
  id: number;
};

const Elem = (props: ElemProps) => {
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
      <input type="checkbox"></input>
      <div> {props.id}</div>
    </div>
  );
};

export default Elem;
