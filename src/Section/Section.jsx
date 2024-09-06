import React, { useState } from "react";
import useStore from "../listtodo/List";

export default function Section() {
  const [list, setList] = useState("");
  const { checklist, addChecklist, delChecklist } = useStore((state) => ({
    checklist: state.checklist,
    addChecklist: state.addChecklist,
    delChecklist: state.delChecklist,
  }));

  const hdChange = (e) => {
    setList(e.target.value);
  };
  const hdChick = () => {
    addChecklist(list);
  };
  const delChick = (id) => {
    delChecklist(id);
  };
  return (
    <div className="mx-auto p-8">
      <div className="bg-pink-400 mx-auto p-1 flex justify-between rounded-sm">
        <h1 className="text-[30px] text-white">Navbar</h1>
        <div className=" flex gap-3 ">
          <button className="border bg-pink-200 p-1 rounded-md hover:bg-blue-50">
            Home
          </button>
          <button className="border bg-pink-200 p-1 rounded-md hover:bg-blue-50">
            About
          </button>
          <button className="border bg-pink-200 p-1 rounded-md hover:bg-blue-50">
            Login
          </button>
        </div>
      </div>
      <div className="bg-purple-100 p-4 ">
        <h2 className="text-[20px]">Todo List</h2>
        <input
          type="text"
          className="rounded-md p-1 mb-3 mt-2"
          onChange={hdChange}
        />
        <button
          className="border bg-pink-200 p-1 rounded-md hover:bg-pink-400  ml-2"
          onClick={hdChick}
        >
          Add
        </button>
        <div className="flex flex-col">
          {checklist.map((e) => (
            <li>
              {e.title}
              <button
                className="border bg-red-500 text-white rounded-md p-0.5 hover:bg-red-800 ml-4"
                onClick={() => delChick(e.id)}
              >
                Deleted
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
