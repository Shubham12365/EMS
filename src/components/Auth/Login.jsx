import React, { useState } from "react";

const login = () => {
  //Use States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Two Way Binding Form Submission : Two-way data binding is a concept often used in frameworks and libraries like Angular, React (with hooks), and Vue.js, where the data is synchronized between the view (UI) and the model (data).
  // In the context of submitting a form, two-way data binding means that:
  // Changes in the form (view) automatically update the associated data (model).
  // Changes in the data (model) are immediately reflected in the form (view).
  // So, whenever you type into an input field, the value in your data (the model) changes, and vice versa, allowing the data to flow in both directions automatically.
  
  
  const SubmitForm = (e) => {
    e.preventDefault();

    console.log(
      `Form Submitted Sucessfully , Email is : ${email} and password is : ${password} `
    );
    //Empty both strings after use
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      {/* LoginPage */}
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        {/* <form onSubmit={SubmitForm} className="flex flex-col items-center justify-center gap-2.5" > {This line will not prevent the by default nature of submit function . It will just show the response and disappear} */}
        <form
          onSubmit={(e) => {
            SubmitForm(e);
          }}
          className="flex flex-col items-center justify-center gap-2.5"
        >
          {/* e is a event here . e.target will tell us for which element or input tag its working . 
          And finally e.target.value will give us the actual value in that input tag */}
          <input
            onChange={(e) => {
              setEmail(e.target.value); //will set the state email in real time
              // console.log("Changing" , e.target.value)
            }}
            value={email} //Will be set as email proper state
            className="py-3 px-5 text-white text-xl placeholder:text-gray-400 bg-transparent border-emerald-300 border-2 rounded-full"
            type="email"
            placeholder="Enter your email"
            required
          ></input>

          <input
            onChange={(e) => {
              setPassword(e.target.value); //will set the state password in real time
              // console.log("Changing" , e.target.value)
            }}
            value={password} //Will be set as password proper state
            className="py-3 px-5 text-white text-xl placeholder:text-gray-400 bg-transparent border-emerald-300 border-2 rounded-full"
            type="password"
            placeholder="Enter your password"
            required
          ></input>

          <button className="text-white mt-4 cursor-pointer bg-emerald-600 px-5 py-3 border-none rounded-3xl">
            Log in
          </button>
        </form>
      </div>
      Login
    </div>
  );
};

export default login;
