import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faArrowLeft,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import ListTable from "./ListTable";

export default function Edit({setEdit}:any) {
  return (
    <div>
      <div className={"flex items-center justify-end mb-3"}>
        <button
          onClick={() => setEdit(false)}
          className={"py-2 px-4 font-light flex items-center"}
          style={{ color: "#B569D4" }}
        >
          <FontAwesomeIcon className={"h-4 mr-2"} icon={faArrowLeft} /> Back
        </button>
      </div>
      <div
        className={"w-full bg-white rounded py-6 mb-24 px-5"}
        style={{
          border: "0.5px solid #E0E0E0",
          boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className={"grid grid-cols-5 gap-5"}>
          <div className="flex justify-center mb-5">
            <div
              className={
                "grid relative place-items-center rounded-full bg-white w-36 h-36"
              }
              style={{
                border: "0.5px solid #E0E0E0",
                boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)",
              }}
            >
              <img
                className={"w-9 md:w-12 lg:w-14"}
                src={"/img/story-bank/photo_size.svg"}
                alt={"photo"}
              />
              <div
                className={
                  "w-max rounded-full bg-white grid place-items-center p-2 absolute top-0 right-0"
                }
                style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.15)" }}
              >
                <img
                  className={"w-6"}
                  src={"/img/story-bank/photo_camera.svg"}
                  alt={"photo"}
                />
              </div>
            </div>
          </div>
          <div className={"col-span-4 text-gray-700"}>
            <div className={"flex items-center"}>
              <h3 className={"mr-4 text-gray-800 text-xl md:text-2xl"}>
                James Amen
              </h3>
              <button className={"focus:outline-none"}>
                <FontAwesomeIcon className={"h-4 mr-2"} icon={faPencilAlt} />
              </button>
            </div>
            <p>allendavis@admin.com</p>
            <div className={"flex items-center my-2"}>
              <FontAwesomeIcon className={"h-3 mr-2"} icon={faMapMarkerAlt} />
              <p>Florida, United States</p>
            </div>
            <p className={"text-xl md:text-2xl font-extralight"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <ListTable />
    </div>
  );
}
