const Popout = ({ src, message, className }) => {
  return (
    <div
      className={`fixed z-10 top-24 left-0 right-0 mx-auto w-max flex space-x-3 px-4 py-2 rounded-lg bg-white shadow-lg items-center border-2 ${
        className ? className : ""
      } `}
    >
      <img src={src} className="w-6 md:w-8" />
      <p className="text-sm text-center">{message}</p>
    </div>
  );
};
export default Popout;
