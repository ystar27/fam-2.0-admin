import Cards from "../components/Index/Cards";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import Head from "../components/Layouts/Header/Head";
import Navbar from "../components/Layouts/Header/Navbar";

export default function FAM_MODULE() {
  return (
    <div className={"flex flex-col h-screen"}>
      <Head />
      <Navbar />
      <Dashboard>
        <div className="mx-auto container px-5 duration-300">
          <div className={"my-16"}>
            <h1 className={"text-2xl mb-1"}>Welcome Admin!</h1>
            <div style={{ color: "#B569D4" }} className={"flex items-center"}>
              <h5 className={'mr-2'}>Dashboard</h5> &gt; <h5 className={'ml-2'}> Overview</h5>
            </div>
          </div>
         </div>
      </Dashboard>
    </div>
  );
}
