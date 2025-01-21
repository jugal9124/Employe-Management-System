import React, { useState } from "react";

function Login() {

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20 ">
        <form onSubmit={(e) => {
          submitHandler(e);
        }} className="flex flex-col items-center justify-center" action="">
          <input
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="emial"
            placeholder="Enter Your Email"
          />
          <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
          />
          <button className="w-full mt-5 text-white border-none outline-none hover:bg-emerald-700 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
