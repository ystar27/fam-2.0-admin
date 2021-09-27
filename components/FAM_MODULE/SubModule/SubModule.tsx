import React from "react";
import { useRouter } from "next/router";

const SubModuleTable = ({
  setActiveSubModule,
  setMessage,
  setDeleteSubModule,
  subModules,
  activeModule,
  deleteSubModule,
  editSubMdl,
}: any) => {
  const router = useRouter();

  return (
    <>
      <div
        className={"w-full bg-white rounded py-6 mb-32"}
        style={{ boxShadow: "0px 4px 45px rgba(0, 0, 0, 0.04)" }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%" }}>
            <tr className={"text-left text-lg font-light font-mono"}>
              <th className={"pl-5"}>S/N</th>
              <th>Sub-Modules</th>
              <th>Duration</th>
              <th>Stories</th>
              <th>Action</th>
            </tr>
            {subModules.map((e: any, i) => (
              <tr key={i} className={'hover:bg-gray-50 duration-150'}>
                <td className={"pl-5"}>{i + 1}</td>
                <td className={""}>{e.name}</td>
                <td>{e.duration} days</td>
                <td>{e.story.length} stories</td>
                <td>
                  <div className={"flex items-center mb-2"}>
                    <button
                      className={
                        "bg-gray-300 hover:bg-gray-400 text-white duration-150 rounded mr-5 py-1 px-4 flex items-center"
                      }
                      onClick={() => {
                        router.push({
                          pathname: "/storybank",
                          query: { subModule: e._id },
                        });
                      }}
                    >
                      Stories
                    </button>
                    <button
                      className={
                        "rounded mr-5 py-1 px-4 flex items-center bg-green-100 hover:bg-green-200 duration-150 text-green-500"
                      }
                      onClick={() => editSubMdl(e, i)}
                    >
                      Edit
                    </button>
                    <button
                      className={
                        "rounded py-1 px-4 flex items-center bg-red-100 hover:bg-red-200 duration-150 text-red-500"
                      }
                      onClick={() => {
                        setMessage(`Confirm delete for ${activeModule.name}`);
                        setActiveSubModule(e);
                        setDeleteSubModule(!deleteSubModule);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default SubModuleTable;
