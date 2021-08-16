export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className={"flex flex-col"}>
        <div
          className={"py-6 grid place-items-center h-full"}
          style={{ backgroundColor: "#C23BF9" }}
        >
          <img
            className={"h-full"}
            src={"/img/icons/story.svg"}
            alt={"dashboard"}
          />
        </div>
        <div
          className={
            "py-2 px-5 text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#C263E9" }}
        >
          <h4>Stories</h4>
          <h4 className={"font-semiblod"}>58</h4>
        </div>
        <div
          className={
            "py-2 px-5 border-t border-white text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#C263E9" }}
        >
          <h4 className={"text-sm"}>questions</h4>
          <h4 className={"font-semiblod"}>305</h4>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div
          className={"py-6 grid place-items-center h-full"}
          style={{ backgroundColor: "#00C1FE" }}
        >
          <img
            className={"h-full"}
            src={"/img/icons/season.svg"}
            alt={"dashboard"}
          />
        </div>
        <div
          className={
            "py-2 px-5 text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#36CAF9" }}
        >
          <h4>Seasons</h4>
          <h4 className={"font-semiblod"}>5</h4>
        </div>
        <div
          className={
            "py-2 px-5 border-t border-white text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#36CAF9" }}
        >
          <h4 className={"text-sm"}>Ended</h4>
          <h4 className={"font-semiblod"}>3</h4>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div
          className={"py-6 grid place-items-center h-full"}
          style={{ backgroundColor: "#633FC5" }}
        >
          <img
            className={"h-full"}
            src={"/img/icons/participant.svg"}
            alt={"dashboard"}
          />
        </div>
        <div
          className={
            "py-2 px-5 text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#7248E3" }}
        >
          <h4>Participant</h4>
          <h4 className={"font-semiblod"}>7832</h4>
        </div>
        <div
          className={
            "py-2 px-5 border-t border-white text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#7248E3" }}
        >
          <h4 className={"text-sm"}>Project done</h4>
          <h4 className={"font-semiblod"}>28</h4>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div
          className={"py-6 grid place-items-center h-full"}
          style={{ backgroundColor: "#4B5B0B" }}
        >
          <img
            className={"h-full"}
            src={"/img/icons/mentor.svg"}
            alt={"dashboard"}
          />
        </div>
        <div
          className={
            "py-2 px-5 text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#6C8020" }}
        >
          <h4>Mentor</h4>
          <h4 className={"font-semiblod"}>7</h4>
        </div>
        <div
          className={
            "py-2 px-5 border-t border-white text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#6C8020" }}
        >
          <h4 className={"text-sm"}>Questions</h4>
          <h4 className={"font-semiblod"}>28</h4>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div
          className={"py-6 grid place-items-center h-full"}
          style={{ backgroundColor: "#FA7B6A" }}
        >
          <img
            className={"h-full"}
            src={"/img/icons/module.svg"}
            alt={"dashboard"}
          />
        </div>
        <div
          className={
            "py-2 px-5 text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#FC8C7D" }}
        >
          <h4>Modules</h4>
          <h4 className={"font-semiblod"}>5</h4>
        </div>
        <div
          className={
            "py-2 px-5 border-t border-white text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#FC8C7D" }}
        >
          <h4 className={"text-sm"}>Level</h4>
          <h4 className={"font-semiblod"}>7</h4>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div
          className={"py-6 grid place-items-center h-full"}
          style={{ backgroundColor: "#A53BF9" }}
        >
          <img
            className={"h-full"}
            src={"/img/icons/forum.svg"}
            alt={"dashboard"}
          />
        </div>
        <div
          className={
            "py-2 px-5 text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#B355FD" }}
        >
          <h4>Forums</h4>
          <h4 className={"font-semiblod"}>5</h4>
        </div>
        <div
          className={
            "py-2 px-5 border-t border-white text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#B355FD" }}
        >
          <h4 className={"text-sm"}>topics</h4>
          <h4 className={"font-semiblod"}>7</h4>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div
          className={"py-6 grid place-items-center h-full"}
          style={{ backgroundColor: "#F9C43B" }}
        >
          <img
            className={"h-full"}
            src={"/img/icons/posts.svg"}
            alt={"dashboard"}
          />
        </div>
        <div
          className={
            "py-2 px-5 text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#FFD15C" }}
        >
          <h4>Posts</h4>
          <h4 className={"font-semiblod"}>5</h4>
        </div>
        <div
          className={
            "py-2 px-5 border-t border-white text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#FFD15C" }}
        >
          <h4 className={"text-sm"}>Categories</h4>
          <h4 className={"font-semiblod"}></h4>
        </div>
      </div>
      <div className={"flex flex-col"}>
        <div
          className={"py-6 grid place-items-center h-full"}
          style={{ backgroundColor: "#D35AAA" }}
        >
          <img
            className={"h-full"}
            src={"/img/icons/levels.svg"}
            alt={"dashboard"}
          />
        </div>
        <div
          className={
            "py-2 px-5 text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#DA6AB4" }}
        >
          <h4>Levels</h4>
          <h4 className={"font-semiblod"}>3</h4>
        </div>
        <div
          className={
            "py-2 px-5 border-t border-white text-lg font-light flex items-center justify-between text-white"
          }
          style={{ backgroundColor: "#DA6AB4" }}
        >
          <h4 className={"text-sm"}>Active</h4>
          <h4 className={"font-semiblod"}>0</h4>
        </div>
      </div>
    </div>
  );
}
