import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { propertydataActions } from "../../../store/propertydata-slice";

const FileInput = ({ id, title, text, label, input, src, className }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState([]);
  const preValue = useSelector(
    (state) => state.propertydata.propertydata[id][label]
  );

  useEffect(() => {
    if (preValue) {
      setFile(preValue);
    }
  }, [setFile]);

  useEffect(() => {
    dispatch(
      propertydataActions.setPropertyData({
        id: id,
        name: label,
        value: file,
      })
    );
  }, [file, dispatch]);

  const inputChangeHandler = (e) => {
    const files = e.target.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        setFile((prev) => [...prev, this.result]);
      });
    }
  };

  return (
    <>
      <div
        className={`flex flex-col space-y-6 bg-gray-50 border rounded-lg px-2 py-12 items-center ${
          className ? className : ""
        }`}
      >
        <img src={src} className="md:w-8 w-6" />
        <div className="text-center">
          <h1 className="text-base md:text-xl">{title}</h1>
          <p className="text-xs md:text-sm text-gray-400">{text}</p>
        </div>
        <label
          htmlFor={label}
          className="border rounded-lg px-4 py-2 cursor-pointer font-semibold shadow-md btn-grad text-white"
        >
          {" "}
          {label}
        </label>
        <input
          {...input}
          className="hidden"
          id={label}
          onChange={inputChangeHandler}
        />
      </div>

      <div className="flex xl:flex-wrap flex-row xl:justify-center overflow-x-scroll xl:overflow-hidden gap-2  w-full items-center mt-6 whitespace-nowrap overscroll-x-contain">
        {input.accept === "image/*" &&
          file.map((item) => (
            <img
              src={item}
              key={Math.random()}
              className="w-64 h-40 object-cover rounded-lg border "
            />
          ))}

        {input.accept === "video/*" &&
          file.map((item) => (
            <video
              src={item}
              key={Math.random()}
              className="w-64 h-40 object-cover rounded-lg border"
              controls
            />
          ))}
      </div>
    </>
  );
};
export default FileInput;
