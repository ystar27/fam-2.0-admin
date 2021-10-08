import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props: any) {
  return (
    <div
      className={"h-16 w-full bg-white "}
      style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)" }}
    >
      <div
        className={"grid"}
        style={{ gridTemplateColumns: "minmax(275px, 300px) 1fr" }}
      >
        <div className={"flex items-center justify-center py-3 h-full"}>
          <img className={"h-full"} src={"/img/logo.png"} alt={"FAM Logo"} />
        </div>
        <div className={"py-3 flex items-center justify-between"}>
          <div className={"block md:hidden"}></div>
          <div className={"hidden md:block"}>
            <form>
              <div className={"flex items-center"}>
                <input
                  className={
                    "py-1 px-4 text-base border border-gray-200 rounded-full outline-none focus:outline-none focus:border-gray-400"
                  }
                  name="search"
                  placeholder="Search here..."
                  style={{ minWidth: "300px" }}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className={"h-4 w-4 text-gray-400 -m-6"}
                  style={{}}
                />
              </div>
            </form>
          </div>
          <div className={"flex items-center pr-14"}>
            <div className={"flex flex-col justify-around text-right mr-3"}>
              <h5 className={"text-sm text-gray-500 font-semibold"}>
                FemaleAndMore
              </h5>
              <h6 className={"text-xs text-gray-400"}>admin</h6>
            </div>
            <div className="bg-gray-300 overflow-hidden rounded-full">
              <img
                className={"h-10 w-10"}
                src={"/img/dashboard/user.svg"}
                alt={"FAM Logo"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
