const Card = (props) => {
  return (
    <div className="max-w-8xl px-4 mx-auto">
      <div className={` ${props.className ? props.className : ""}`}>
        {props.children}
      </div>
    </div>
  );
};
export default Card;
