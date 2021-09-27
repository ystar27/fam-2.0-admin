const cards = [
  {
    colors: ["#C23BF9", "#C263E9"],
    main: "Users",
    sub: "Participant",
    key: "users",
  },
  {
    colors: ["#00C1FE", "#36CAF9"],
    main: "Story",
    sub: "Question",
    key: "story",
  },
  {
    colors: ["#633FC5", "#7248E3"],
    main: "Seasons",
    sub: "Ended",
    key: "season",
  },
  {
    colors: ["#4B5B0B", "#6C8020"],
    main: "Mentors",
    sub: "Questions",
    key: "mentor",
  },
  {
    colors: ["#FA7B6A", "#FC8C7D"],
    main: "Modules",
    sub: "Levels",
    key: "module",
  },
  {
    colors: ["#A53BF9", "#B355FD"],
    main: "Forums",
    sub: "Topics",
    key: "forums",
  },
  {
    colors: ["#F9C43B", "#FFD15C"],
    main: "Posts",
    sub: "Category",
    key: "post",
  },
  {
    colors: ["#D35AAA", "#DA6AB4"],
    main: "Level",
    sub: "Active",
    key: "level",
  },
];

export default function Cards({ cardData }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((e, i) => (
        <div key={i} className={"flex flex-col"}>
          <div
            className={"py-6 grid place-items-center h-full"}
            style={{ backgroundColor: e.colors[0] }}
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
            style={{ backgroundColor: e.colors[1] }}
          >
            <h4>{e.main}</h4>
            <h4 className={"font-semiblod"}>{cardData[e.key]}</h4>
          </div>
          <div
            className={
              "py-2 px-5 border-t border-white text-lg font-light flex items-center justify-between text-white"
            }
            style={{ backgroundColor: e.colors[1] }}
          >
            <h4 className={"text-sm"}>{e.sub}</h4>
            <h4 className={"font-semiblod"}></h4>
          </div>
        </div>
      ))}
    </div>
  );
}
