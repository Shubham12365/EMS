import React from "react";

const TaskListNumbers = () => {
  return (
    // Difference b/w screen and w-screen : screen is used for responsive design Ex: sm:bg-green-500 lg:bg-red-500  while w-screen is a utility class that sets the width of an element to 100% of the viewport width.
    <div className="flex screen items-center mt-10 gap-5">
      <div className="bg-red-500 py-8 px-9 font-medium text-2xl w-[45%] rounded-xl ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-green-500 py-8 px-9 font-medium text-2xl w-[45%] rounded-xl ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-blue-500 py-8 px-9 font-medium text-2xl w-[45%] rounded-xl ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-yellow-500 py-8 px-9 font-medium text-2xl w-[45%] rounded-xl ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
