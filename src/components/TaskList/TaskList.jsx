import React from "react";

const TaskList = () => {
  return (
    // overflow-x-auto , flex-shrink-0 , flex-nowrap
    //To remove scrollbar using id in index.css
    <div
      id="tasklist"
      className="flex flex-nowrap items-center justify-start w-full h-[55%] mt-10 gap-5 overflow-x-auto  "
    >
      <div className="flex-shrink-0  bg-red-400 h-full w-[300px] rounded-2xl p-5">
        <div className="flex justify-between items-center">
            <h3 className="bg-red-600 px-3 py-1 text-sm rounded"> High</h3>
            <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Youtube Video</h2>
        <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nihil culpa odit aperiam odio.</p>
      </div>
    </div>
  );
};

export default TaskList;
