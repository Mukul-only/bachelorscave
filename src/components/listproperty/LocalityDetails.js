import { useEffect, useState, useMemo } from "react";
import { validationActions } from "../../store/validation-slice";
import { useDispatch, useSelector } from "react-redux";

import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  Autocomplete,
  CircleF,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import Select from "./helper/Select";
import Input from "./helper/Input";

const center = { lat: 30.7333, lng: 76.7794 };

const getCity = (response) => {
  let city, state, country;
  for (let i = 0; i < response.address_components.length; i++) {
    for (let j = 0; j < response.address_components[i].types.length; j++) {
      switch (response.address_components[i].types[j]) {
        case "locality":
          city = response.address_components[i].long_name;
          break;
        case "administrative_area_level_1":
          state = response.address_components[i].long_name;
          break;
        case "country":
          country = response.address_components[i].long_name;
          break;
      }
    }
  }
  return city;
};

const LocalityDetails = (props) => {
  Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  const [autocomplete, setAutocomplete] = useState(null);
  const [latLng, setLatLan] = useState(center);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState({ id: false, msg: "" });
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
    libraries: libraries,
  });
  const [changedByInput, setChangedByInput] = useState(false);
  const [map, setMap] = useState(null);
  const dispatch = useDispatch();
  const locality = useSelector(
    (state) => state.propertydata.propertydata["Locality details"].Locality
  );
  useEffect(() => {
    dispatch(validationActions.setCurrent(1));
    dispatch(validationActions.setNext("/listproperty/rentaldetails"));
  }, [dispatch]);

  const markerDragEndHandler = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const latLng = { lat: lat, lng: lng };
    setLatLan(latLng);

    setChangedByInput(false);
  };
  useEffect(() => {
    if (!changedByInput) {
      Geocode.fromLatLng(latLng.lat.toString(), latLng.lng.toString()).then(
        (response) => {
          const address = response.results[0].formatted_address;
          let city, state, country;
          for (
            let i = 0;
            i < response.results[0].address_components.length;
            i++
          ) {
            for (
              let j = 0;
              j < response.results[0].address_components[i].types.length;
              j++
            ) {
              switch (response.results[0].address_components[i].types[j]) {
                case "locality":
                  city = response.results[0].address_components[i].long_name;
                  break;
                case "administrative_area_level_1":
                  state = response.results[0].address_components[i].long_name;
                  break;
                case "country":
                  country = response.results[0].address_components[i].long_name;
                  break;
              }
            }
          }
          if (city === "Chandigarh") {
            setCity(city);
            setError({
              id: false,
              msg: "",
            });

            setAddress(address);
          } else {
            setError({
              id: true,
              msg: "Marker draged to wrong location (must be Inside chadigarh)!",
            });
            setLatLan(center);
            map.panTo(center);
          }
        },
        (error) => {
          // console.error(error);
          if (map !== null) {
            map.panTo(center);
            setLatLan(center);
          }
        }
      );
    }
  }, [changedByInput, latLng]);

  useEffect(() => {
    if (locality && changedByInput) {
      Geocode.fromAddress(locality).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;

          setLatLan({ lat: lat, lng: lng });
        },
        (error) => {
          // console.error(error);
        }
      );
    }
  }, [changedByInput, locality]);

  const placeChangeHandler = () => {
    if (autocomplete !== null) {
      const response = autocomplete.getPlace();
      setAddress(response.formatted_address);

      const city = getCity(response);

      if (city === "Chandigarh") {
        setError({
          id: false,
          msg: "",
        });
        setChangedByInput(true);
      } else {
        setError({
          id: true,
          msg: "please enter correct place (must be Inside chadigarh)!",
        });
      }
    }
  };

  const currentLocationSetHandler = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setChangedByInput(false);
        setLatLan({ lat: latitude, lng: longitude });
      }
    );
  };

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1 className="text-lg md:text-xl font-semibold text-darkBlue">
        Locality
      </h1>
      <hr className="border-t my-2 border-gray-300" />
      <div className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-6 mt-8">
        <div className="basis-1/2">
          <Select
            id="Locality details"
            className="w-full"
            label="City"
            options={["Chandigarh"]}
            selected={city}
          />
        </div>
        <div className="basis-1/2">
          <Autocomplete
            onLoad={(autocomplete) => {
              setAutocomplete(autocomplete);
            }}
            onPlaceChanged={placeChangeHandler}
          >
            <Input
              id="Locality details"
              input={{
                type: "text",
                placeholder: "Enter location / society name",
              }}
              val={address}
              className=""
              label="Locality"
              validation={(value) => value.trim().length !== 0 && !error.id}
              errMsg="invalid"
            />
          </Autocomplete>

          <span
            className="flex items-center space-x-2 text-[#00009C] font-[500] mt-2 text-sm md:text-base cursor-pointer"
            onClick={currentLocationSetHandler}
          >
            <img
              src={require("../../assets/crosshair.png")}
              className="w-4 md:w-6"
            />
            <p> use your current location</p>
          </span>
        </div>
      </div>

      <Input
        id="Locality details"
        input={{ type: "text", placeholder: "Eg. Evergreen street" }}
        className="w-full md:w-[49%] mt-6"
        label="Landmark / street"
        validation={(value) => true}
        errMsg="invalid"
      />
      <p className="text-xs text-gray-400">
        this feild is not needed but this makes listing faster and eaiser.
      </p>

      <div className="w-full  mt-6 ">
        <span className="flex space-x-3 items-center">
          <img
            src={require("../../assets/location.png")}
            className="w-6 md:w-8"
          />
          <h1 className="font-semibold text-base md:text-lg pb-2">
            Mark location on map.
          </h1>
        </span>
        <p className="px-10 md:px-12 text-xs md:text-sm text-gray-400 ">
          Drag the map marker.
        </p>
        {error.id && (
          <p className="text-red-600 text-xs md:text-sm pl-4 md:px-12">
            {error.msg}
          </p>
        )}
        <div className="h-[400px] rounded-lg overflow-hidden border mt-4">
          <GoogleMap
            center={latLng}
            zoom={13}
            mapContainerClassName="w-full h-full"
            onClick={markerDragEndHandler}
            onLoad={(map) => {
              setMap(map);
            }}
          >
            <MarkerF
              position={latLng}
              draggable
              onDragEnd={markerDragEndHandler}
            />
            <CircleF
              // required
              center={latLng}
              // required
              options={{
                strokeColor: "#003262",
                strokeOpacity: 0.6,
                strokeWeight: 2,
                fillColor: "#007FFF",
                fillOpacity: 0.075,
                clickable: false,
                draggable: false,
                editable: false,
                visible: true,
                radius: 1000,
                zIndex: 1,
              }}
            />
          </GoogleMap>
        </div>
      </div>
    </>
  );
};
export default LocalityDetails;
