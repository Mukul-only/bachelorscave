const Button = (props) => {
  return (
    <button
      className={`rounded-md shadow-btn ${
        props.className ? props.className : ""
      } border border-darkBlue`}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
