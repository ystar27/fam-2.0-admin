export default function Body(props: any) {
  return (
    <div className={"bg-gray-50 h-full overflow-y-auto relative"}>
      {props.children}
    </div>
  );
}
