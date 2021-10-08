import SideNav from "./SideNav";
import Body from "./Body";

export default function Dashboard(props: any) {
  return (
    <div
      className={"grid flex-1 overflow-y-auto"}
      style={{ gridTemplateColumns: "minmax(275px, 300px) 1fr" }}
    >
      <SideNav />
      <Body>{props.children}</Body>
    </div>
  );
}
