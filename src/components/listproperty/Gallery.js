import { useDispatch } from "react-redux";
import Select from "./helper/Select";
import { useEffect } from "react";
import { validationActions } from "../../store/validation-slice";
import Input from "./helper/Input";
import FileInput from "./helper/FileInput";

const Gallery = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validationActions.setCurrent(4));
    dispatch(validationActions.setNext("/listproperty/schedule"));
    dispatch(validationActions.setPrev("/listproperty/amenities"));
    dispatch(
      validationActions.setFeildValidity({ id: "gallery", isValid: true })
    );
  }, [dispatch]);
  return (
    <>
      <h1 className="text-lg md:text-xl font-semibold text-darkBlue">
        Upload photos & videos
      </h1>
      <hr className="border-t my-2 border-gray-300" />
      <FileInput
        id="Gallery"
        label="Add photos"
        title="Add photos to get 5X more responses."
        text="90% tenants contact on properties with photos."
        src={require("../../assets/photo-camera.png")}
        input={{ type: "file", accept: "image/*" }}
        className="mt-6"
      />
      <FileInput
        id="Gallery"
        label="Add video"
        title="Add video to get 5X more responses."
        text="90% tenants contact on properties with videos."
        src={require("../../assets/movie.png")}
        input={{ type: "file", accept: "video/*" }}
        className="mt-6"
      />
    </>
  );
};
export default Gallery;