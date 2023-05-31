import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { propertydataActions } from "../../../store/propertydata-slice";

const FileInput = ({
  id,
  title,
  text,
  label,
  input,
  src,
  className,
  count,
  cntEr,
  size,
  sizeEr,
}) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState([]);
  const [hasError, setHasError] = useState({ size: false, cnt: false });
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
    if (file.length < count) {
      const files = e.target.files[0];
      const lock = size ? files.size <= size : true;
      if (lock) {
        if (files) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(files);

          fileReader.addEventListener("load", function () {
            setFile((prev) => [
              ...prev,
              { id: Math.random(), selected: false, src: this.result },
            ]);
          });
        }
      } else {
        setHasError((prev) => {
          return { ...prev, size: true };
        });
      }
    } else {
      setHasError((prev) => {
        return { ...prev, cnt: true };
      });
    }
  };

  const itemRemoveHandler = (val) => {
    setFile((prev) => prev.filter((item) => item.id !== val));
  };
  const markClickHandler = (id) => {
    const existingItem = file.find((item) => item.id === id);
    const newItem = {
      ...existingItem,
      selected: true,
    };
    setFile((prev) => {
      const changedFile = [...prev];
      for (let i = 0; i < prev.length; i++) {
        if (changedFile[i].id === id) {
          changedFile[i] = newItem;
        } else {
          changedFile[i] = { ...changedFile[i], selected: false };
        }
      }
      return changedFile;
    });
  };
  useEffect(() => {
    if (file.length < count) {
      setHasError((prev) => {
        return { size: prev.size, cnt: false };
      });
    }
    setHasError((prev) => {
      return { size: false, cnt: prev.cnt };
    });
  }, [file, setHasError]);

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
      {hasError.size && (
        <p className="text-red-500 px-2 text-xs md:text-sm mt-2">{sizeEr}</p>
      )}
      {hasError.cnt && (
        <p className="text-red-500 px-2 text-xs md:text-sm mt-2">{cntEr}</p>
      )}

      <div className="flex xl:flex-wrap flex-row xl:justify-center overflow-x-auto xl:overflow-hidden gap-2 w-full items-center mt-6 whitespace-nowrap overscroll-x-contain scroll_bar">
        {input.accept === "image/*" &&
          file.map((item) => (
            <div
              className="min-w-[12rem] md:min-w-[16rem] rounded-lg  overflow-hidden border relative "
              key={item.id}
            >
              <img
                src={item.src}
                className="w-full  h-40 object-cover hover:scale-110 duration-300 "
                onClick={() => {
                  markClickHandler(item.id);
                }}
              />
              <div className="absolute top-0 left-0 right-0 z-40 flex space-x-4 p-3 justify-between ">
                <span
                  className="relative group"
                  onClick={() => {
                    markClickHandler(item.id);
                  }}
                >
                  <img
                    src={
                      item.selected
                        ? require("../../../assets/favourite (1).png")
                        : require("../../../assets/favourite.png")
                    }
                    className="w-10 h-10 p-2 rounded-full bg-white cursor-pointer"
                  />
                  <span className="absolute select-none opacity-0 group-hover:opacity-100 left-0 px-2 py-1 rounded-md top-full bg-black text-white bg-opacity-70 text-sm duration-200">
                    Mark as display image
                  </span>
                </span>
                <img
                  src={require("../../../assets/trash-can.png")}
                  className="w-10 h-10 p-2 rounded-full bg-white cursor-pointer"
                  onClick={() => {
                    itemRemoveHandler(item.id);
                  }}
                />
              </div>
            </div>
          ))}

        {input.accept === "video/*" &&
          file.map((item) => (
            <div
              className="min-w-[12rem] md:min-w-[16rem] rounded-lg  overflow-hidden border relative"
              key={item.id}
            >
              <video
                src={item.src}
                key={Math.random()}
                className="w-full h-40 object-cover "
                controls
              />
              <div className="flex space-x-4 p-3 justify-end absolute top-0 left-0 right-0 z-10 ">
                <img
                  src={require("../../../assets/trash-can.png")}
                  className="w-10 h-10 p-2 rounded-full bg-white cursor-pointer"
                  onClick={() => {
                    itemRemoveHandler(item.id);
                  }}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default FileInput;
